param(
  [Parameter(Mandatory = $true)][string]$InputPath,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

$source = [System.Drawing.Bitmap]::FromFile((Resolve-Path -LiteralPath $InputPath).Path)
$bitmap = [System.Drawing.Bitmap]::new($source.Width, $source.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.DrawImageUnscaled($source, 0, 0)
$graphics.Dispose()
$source.Dispose()

$rect = [System.Drawing.Rectangle]::new(0, 0, $bitmap.Width, $bitmap.Height)
$data = $bitmap.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$length = [Math]::Abs($data.Stride) * $bitmap.Height
$bytes = [byte[]]::new($length)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $length)

$width = $bitmap.Width
$height = $bitmap.Height
$background = [bool[]]::new($width * $height)
$queue = [System.Collections.Generic.Queue[int]]::new()

function Test-BackgroundPixel([int]$x, [int]$y) {
  $pixel = $y * $data.Stride + $x * 4
  $blue = [int]$bytes[$pixel]
  $green = [int]$bytes[$pixel + 1]
  $red = [int]$bytes[$pixel + 2]
  $maximum = [Math]::Max($red, [Math]::Max($green, $blue))
  $luminance = $red * 0.2126 + $green * 0.7152 + $blue * 0.0722
  return $maximum -lt 92 -and $luminance -lt 74
}

function Add-Seed([int]$x, [int]$y) {
  $position = $y * $width + $x
  if (-not $background[$position] -and (Test-BackgroundPixel $x $y)) {
    $background[$position] = $true
    $queue.Enqueue($position)
  }
}

for ($x = 0; $x -lt $width; $x++) {
  Add-Seed $x 0
  Add-Seed $x ($height - 1)
}
for ($y = 0; $y -lt $height; $y++) {
  Add-Seed 0 $y
  Add-Seed ($width - 1) $y
}

$offsetX = @(1, -1, 0, 0)
$offsetY = @(0, 0, 1, -1)
while ($queue.Count -gt 0) {
  $position = $queue.Dequeue()
  $x = $position % $width
  $y = [Math]::Floor($position / $width)
  for ($i = 0; $i -lt 4; $i++) {
    $nextX = $x + $offsetX[$i]
    $nextY = $y + $offsetY[$i]
    if ($nextX -lt 0 -or $nextY -lt 0 -or $nextX -ge $width -or $nextY -ge $height) { continue }
    $next = $nextY * $width + $nextX
    if (-not $background[$next] -and (Test-BackgroundPixel $nextX $nextY)) {
      $background[$next] = $true
      $queue.Enqueue($next)
    }
  }
}

for ($y = 0; $y -lt $height; $y++) {
  for ($x = 0; $x -lt $width; $x++) {
    if ($background[$y * $width + $x]) {
      $bytes[$y * $data.Stride + $x * 4 + 3] = 0
    }
  }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $length)
$bitmap.UnlockBits($data)
$bitmap.Save([System.IO.Path]::GetFullPath($OutputPath), [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
