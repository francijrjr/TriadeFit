(() => {
  const motion = window.Motion;
  const animate = motion ? motion.animate : null;
  const hover = motion ? motion.hover : null;
  const stagger = motion ? motion.stagger : (v) => v;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".reveal").forEach(el => el.style.opacity = 1);

  function safeAnimate(target, keyframes, opts){
    if(!animate || reduceMotion){
      const nodes = typeof target === "string" ? document.querySelectorAll(target) : [target];
      nodes.forEach(n => n && (n.style.opacity = 1));
      return;
    }
    try{ animate(target, keyframes, opts); }catch(e){ /* no-op */ }
  }

  const words = ["TREINO DE VERDADE", "RESULTADO REAL", "SEM PRESSA", "SEM DESCULPA", "SEM PARAR", "CONSTÂNCIA VENCE"];
  const track = document.getElementById("tickerTrack");
  if(track){
    const build = () => words.map(w => `<span><i></i><em>${w}</em></span>`).join("");
    track.innerHTML = build() + build();
  }

  function buildShards(container, count, radius, altClass){
    if(!container) return;
    let html = "";
    for(let i = 0; i < count; i++){
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
      const dist = radius * (0.65 + Math.random() * 0.6);
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const rot = Math.floor(Math.random() * 360);
      const delay = (Math.random() * 0.22).toFixed(2);
      const alt = i % 3 === 0 ? " alt" : "";
      html += `<span class="${altClass}${alt}" style="--tx:${tx.toFixed(0)}px; --ty:${ty.toFixed(0)}px; --rot:${rot}deg; animation-delay:${delay}s"></span>`;
    }
    container.innerHTML = html;
  }

  const introBumper = document.getElementById("introBumper");
  buildShards(document.getElementById("bumperShards"), 14, 260, "bumper-shard");

  function finishBumper(){
    if(introBumper){
      introBumper.classList.add("is-out");
      window.setTimeout(() => { introBumper.style.display = "none"; }, 650);
    }
    playHeroOpen();
  }

  if(reduceMotion){
    if(introBumper) introBumper.style.display = "none";
    document.querySelectorAll(".reveal").forEach(el => el.style.opacity = 1);
  } else {
    window.setTimeout(finishBumper, 1900);
  }

  function playHeroOpen(){
    const lbTop = document.getElementById("lbTop");
    const lbBottom = document.getElementById("lbBottom");
    if(reduceMotion || !animate){
      document.querySelectorAll(".reveal").forEach(el => el.style.opacity = 1);
      return;
    }
    if(lbTop && lbBottom){
      lbTop.style.height = "50vh"; lbBottom.style.height = "50vh";
      animate(lbTop, { height: ["50vh","0vh"] }, { duration: 1.1, delay: .15, easing: [0.76,0,0.24,1] });
      animate(lbBottom, { height: ["50vh","0vh"] }, { duration: 1.1, delay: .15, easing: [0.76,0,0.24,1] });
    }
    animate("#heroKicker", { opacity: [0,1], x: [-24,0] }, { duration: .6, delay: .55 });
    animate("#heroLine1", { opacity: [0,1], y: [70,0] }, { duration: .85, delay: .68, easing: [0.16,1,0.3,1] });
    animate("#heroLine2", { opacity: [0,1], y: [70,0] }, { duration: .85, delay: .8, easing: [0.16,1,0.3,1] });
    animate("#heroLead", { opacity: [0,1], y: [16,0] }, { duration: .6, delay: 1.05 });
    animate("#heroCta1, #heroCta2", { opacity: [0,1], y: [14,0] }, { duration: .55, delay: stagger(.1, { startDelay: 1.2 }) });
    animate("#heroTrust", { opacity: [0,1] }, { duration: .5, delay: 1.4 });
    animate("#pulsePanel", { opacity: [0,1], scale: [.96,1] }, { duration: .8, delay: 1.0, easing: [0.16,1,0.3,1] });

    const path = document.getElementById("pulsePath");
    if(path){
      animate(path, { opacity: [.4,1] }, { duration: .8, delay: .35, easing: "ease-out" });
      window.setTimeout(loopPulse, 3200);
    }
  }
  function loopPulse(){
    const path = document.getElementById("pulsePath");
    if(reduceMotion || !animate) return;
    setInterval(() => {
      animate(path, { opacity: [1,.35,1] }, { duration: 1.1, easing: "ease-in-out" });
    }, 1200);
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      safeAnimate(el, { opacity: [0,1], y: [26,0] }, { duration: .75, easing: [0.16,1,0.3,1] });
    });
  }, { threshold: .18 });

  document.querySelectorAll(".reveal").forEach(el => {
    if(["heroKicker","heroLine1","heroLine2","heroLead","heroCta1","heroCta2","heroTrust","pulsePanel"].includes(el.id)) return;
    io.observe(el);
  });

  document.querySelectorAll(".feature, .modality").forEach((el, i) => {
    el.style.transitionDelay = "";
  });

  if(hover && animate){
    hover(".modality", (element) => {
      const cards = [...element.parentElement.querySelectorAll(".modality")];
      const siblings = cards.filter(card => card !== element);
      const compact = window.matchMedia("(max-width:600px)").matches;
      const image = element.querySelector(":scope > img");
      const title = element.querySelector("h3");
      const arrow = element.querySelector("svg.arrow");

      animate(element, compact ? { y:-6 } : { flexGrow:1.55, y:-8 }, { duration:.42, easing:[.16,1,.3,1] });
      if(!compact) animate(siblings, { flexGrow:.78, opacity:.78 }, { duration:.42, easing:[.16,1,.3,1] });
      if(image) animate(image, { scale:1.07 }, { duration:.6, easing:"ease-out" });
      if(title) animate(title, { x:8 }, { duration:.35, easing:"ease-out" });
      if(arrow) animate(arrow, { rotate:45, backgroundColor:"#e21c2b", color:"#ffffff" }, { duration:.3 });

      return () => {
        animate(cards, { flexGrow:1, y:0, opacity:1 }, { duration:.42, easing:[.16,1,.3,1] });
        if(image) animate(image, { scale:1 }, { duration:.55, easing:"ease-out" });
        if(title) animate(title, { x:0 }, { duration:.35, easing:"ease-out" });
        if(arrow) animate(arrow, { rotate:0, backgroundColor:"rgba(0,0,0,0)", color:"#ff4d4d" }, { duration:.3 });
      };
    });
  }

  const featureIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      featureIO.unobserve(entry.target);
    });
  }, { threshold: .2 });

  const stage = document.getElementById("filmStage");
  const replay = document.getElementById("replayCampaign");
  let hasPlayed = false, playing = false;

  function resetFilm(){
    document.querySelectorAll(".film-topline span, .film-kicker, .film-lead, .film-actions > *, .film-stamp").forEach(el => el.style.opacity = 0);
    document.querySelectorAll(".film-copy, .film-topline").forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
    const stamp = document.querySelector(".film-stamp");
    if(stamp) stamp.style.transform = "none";
    document.querySelectorAll(".film-copy h2 b").forEach(el => { el.style.opacity = 0; el.style.transform = "translateY(100%)"; });
    const progress = document.getElementById("filmProgress");
    if(progress) progress.style.transform = "scaleX(0)";
    const sceneBrand = document.getElementById("filmSceneBrand");
    const burst = document.getElementById("filmBurst");
    const logo = document.getElementById("filmLogo");
    const athlete = document.getElementById("athleteScene");
    const athleteSecondary = document.getElementById("athleteSceneSecondary");
    if(sceneBrand) sceneBrand.style.opacity = 0;
    if(burst) { burst.style.opacity = 0; burst.style.transform = "scale(.6)"; }
    if(logo) { logo.style.opacity = 0; logo.style.transform = "scale(.7)"; }
    if(athlete) athlete.style.opacity = 1;
    if(athleteSecondary) athleteSecondary.style.opacity = 0;
    const wipe = document.getElementById("filmWipe");
    const scan = document.getElementById("filmScan");
    if(wipe) { wipe.style.opacity = 0; wipe.style.transform = "translateX(0) skewX(-14deg)"; }
    if(scan) { scan.style.opacity = 0; scan.style.transform = "translateX(0) skewX(-10deg)"; }
    const shards = document.getElementById("filmShards");
    if(shards) shards.innerHTML = "";
  }

  function playCampaign(){
    if(playing || reduceMotion || !animate) { document.querySelectorAll(".film-topline span, .film-kicker, .film-lead, .film-actions > *, .film-stamp").forEach(el => el.style.opacity = 1); document.querySelectorAll(".film-copy h2 b").forEach(el => {el.style.opacity=1; el.style.transform="none";}); return; }
    playing = true;
    resetFilm();

    animate(".film-head .eyebrow", { opacity:[0,1], x:[-34,0] }, { duration:.65, easing:[.16,1,.3,1] });
    animate(".film-head h2", { opacity:[0,1], x:[-18,0], letterSpacing:[".16em",".035em"], clipPath:["inset(0 100% 0 0)","inset(0 0% 0 0)"] }, { duration:.9, delay:.12, easing:[.16,1,.3,1] });
    animate(".film-head .section-num", { opacity:[0,1], x:[24,0] }, { duration:.55, delay:.35 });

    const barTop = document.getElementById("filmBarTop");
    const barBottom = document.getElementById("filmBarBottom");
    if(barTop && barBottom){
      barTop.style.height = "0px"; barBottom.style.height = "0px";
      animate(barTop, { height: ["0px","44px"] }, { duration: .5, easing: [0.76,0,0.24,1] });
      animate(barBottom, { height: ["0px","44px"] }, { duration: .5, easing: [0.76,0,0.24,1] });
    }

    animate("#athleteScene", { scale: [1.13, 1.02], x: [32, 0] }, { duration: 3.2, easing: "ease-out" });
    animate("#athleteScene", { opacity:[1,.18] }, { duration:.55, delay:2.35, easing:"ease-in-out" });
    animate("#athleteSceneSecondary", { opacity:[0,1], scale:[1.12,1.02], x:[-28,0] }, { duration:2.15, delay:2.35, easing:[.16,1,.3,1] });
    animate("#beam", { opacity: [0, .9, 0], x: [-80, 260] }, { duration: 1.6, delay: .3, easing: "ease-in" });
    animate("#filmScan", { opacity:[0,.75,0], x:[0,1450] }, { duration:1.35, delay:.18, easing:"ease-in-out" });
    animate("#filmWipe", { opacity:[0,1,0], x:[0,2100] }, { duration:1.05, delay:.05, easing:[.76,0,.24,1] });
    animate("#filmProgress", { scaleX: [0,1] }, { duration: 6.6, easing: "linear" });
    animate(".film-topline span", { opacity: [0,1], y: [-12,0] }, { duration: .6, delay: stagger(.08, { startDelay: .3 }) });
    animate(".film-kicker", { opacity: [0,1], x: [-28,0] }, { duration: .65, delay: .5, easing: [0.22,1,0.36,1] });
    animate(".film-kicker i", { scaleX:[0,1] }, { duration:.45, delay:.58, easing:"ease-out" });
    animate(".film-copy h2 b", { opacity: [0,1], y: [100,0] }, { duration: .85, delay: stagger(.14, { startDelay: .75 }), easing: [0.16,1,0.3,1] });
    animate(".film-lead", { opacity: [0,1], y: [22,0] }, { duration: .65, delay: 1.35 });
    animate(".film-actions > *, .film-stamp", { opacity: [0,1], y: [20,0] }, { duration: .6, delay: stagger(.1, { startDelay: 1.55 }) });

    animate(".film-copy, .film-topline, .film-stamp", { opacity:[1,0], x:[0,-28] }, { duration:.42, delay:4.05, easing:"ease-in" });
    animate("#athleteSceneSecondary", { opacity: [1, .1], scale:[1.02,1.08] }, { duration: .5, delay: 4.25, easing: "ease-in" });
    animate("#filmSceneBrand", { opacity: [0,1] }, { duration: .5, delay: 4.35, easing: [0.22,1,0.36,1] });
    animate("#filmBurst", { opacity: [0,.9,0], scale: [.55,1.2,1.05] }, { duration: 1.15, delay: 4.35, easing: "ease-out" });
    animate("#filmLogo", { opacity: [0,1], scale: [.58,1], rotate:[-2,0] }, { duration: .8, delay: 4.55, easing: [0.16,1,0.3,1] });
    window.setTimeout(() => buildShards(document.getElementById("filmShards"), 10, 130, "film-shard"), 4350);

    window.setTimeout(() => { playing = false; hasPlayed = true; }, 6700);
  }

  if(stage){
    const checkPosition = () => {
      const rect = stage.getBoundingClientRect();
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if(!hasPlayed && visible > Math.min(rect.height * .25, 190)){
        window.removeEventListener("scroll", checkPosition);
        playCampaign();
      }
    };
    window.addEventListener("scroll", checkPosition, { passive: true });
    window.setTimeout(checkPosition, 250);
  }
  replay?.addEventListener("click", () => { hasPlayed = false; playCampaign(); });

  const menuToggle = document.getElementById("menuToggle");
  menuToggle?.addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    if(!nav) return;
    const open = nav.style.display === "flex";
    nav.style.cssText = open ? "" : "display:flex;position:fixed;top:70px;left:20px;right:20px;flex-direction:column;background:#131313;border:1px solid rgba(247,245,240,.1);padding:20px;gap:18px;z-index:99;border-radius:4px;";
  });

  const form = document.getElementById("leadForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = form.querySelector(".form-message");
    if(msg){
      msg.textContent = "Recebemos seus dados! Nossa equipe entra em contato em breve.";
      msg.classList.add("ok");
    }
    form.reset();
  });

})();
