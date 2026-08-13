# Tríade Fit — Especificação inicial do produto

**Versão:** 0.1  
**Data:** 13 de agosto de 2026  
**Status:** proposta para validação  
**Nome:** provisório; disponibilidade de marca e domínio ainda não verificada

## 1. Visão

O Tríade Fit é uma plataforma de acompanhamento fitness que conecta três pilares em uma única jornada:

1. academia e frequência presencial;
2. treinamento prescrito por profissional de Educação Física;
3. acompanhamento alimentar prescrito por nutricionista.

O aluno recebe um plano coordenado, acompanha sua evolução e mantém contato com sua equipe. A academia passa a enxergar sinais de abandono antes do cancelamento, enquanto personal trainers e nutricionistas ganham organização, recorrência e acesso a novos clientes.

### Proposta de valor

> Academia, nutrição e personal conectados ao mesmo objetivo.

### Problema principal

Hoje, a experiência costuma ser fragmentada:

- a academia conhece apenas presença e pagamento;
- o personal acompanha o treino em planilhas, mensagens ou outro aplicativo;
- o nutricionista acompanha a alimentação em ferramenta separada;
- o aluno precisa repetir informações e não enxerga sua evolução completa;
- ninguém percebe rapidamente quando a adesão começa a cair.

## 2. Decisão inicial de negócio

O primeiro modelo será **B2B2C**:

- a academia contrata o Tríade Fit;
- convida seus profissionais e alunos;
- oferece pacotes integrados;
- a plataforma organiza a operação e recebe mensalidade e/ou comissão.

Essa abordagem reduz o custo de aquisição de alunos e usa a base que a academia já possui. O marketplace público de profissionais pode ser lançado depois da validação.

## 3. Região e público do piloto

### Região inicial

Crato, Juazeiro do Norte e Barbalha.

### Academia ideal para o piloto

- academia independente ou pequena rede;
- entre 200 e 1.500 alunos ativos;
- possui pelo menos um profissional de Educação Física;
- aceita oferecer acompanhamento nutricional parceiro;
- sofre com faltas, baixa adesão ou cancelamentos;
- tem gestão disposta a testar o produto por 90 dias.

### Aluno inicial

- adulto iniciante ou intermediário;
- busca emagrecimento, ganho de massa ou condicionamento;
- tem dificuldade de manter constância;
- usa WhatsApp e smartphone;
- valoriza acompanhamento, mas não pode contratar um personal presencial diariamente.

## 4. Perfis do sistema

### Aluno

- responde avaliação inicial;
- informa objetivo e restrições;
- acessa treino e plano alimentar;
- realiza check-in na academia;
- registra execução, cargas, refeições e percepção semanal;
- acompanha medidas, fotos e evolução;
- recebe alertas e orientações da equipe.

### Personal trainer / profissional de Educação Física

- registra formação e CREF;
- recebe alunos atribuídos;
- analisa avaliação física e objetivo;
- prescreve treinos e periodização;
- acompanha execução, cargas, dor, dificuldade e frequência;
- troca observações profissionais com o nutricionista, respeitando as permissões do aluno.

### Nutricionista

- registra formação e CRN;
- realiza anamnese nutricional;
- prescreve plano alimentar e substituições;
- acompanha adesão e evolução;
- consulta o resumo de frequência e carga de treino autorizado pelo aluno;
- registra retornos e ajustes.

### Academia

- gerencia unidade, equipe e alunos;
- vende ou atribui pacotes;
- acompanha check-ins e risco de abandono;
- consulta indicadores operacionais;
- dispara campanhas de recuperação;
- acompanha receita gerada pela plataforma.

### Administrador da plataforma

- valida academias e profissionais;
- gerencia planos e contratos;
- acompanha pagamentos e repasses;
- trata denúncias e suporte;
- acessa somente os dados necessários à operação.

## 5. Jornada principal de 90 dias

1. A academia cadastra sua unidade e equipe.
2. O aluno compra ou recebe um pacote integrado.
3. O aluno aceita os termos e escolhe quais dados serão compartilhados.
4. O aluno conclui o questionário inicial.
5. O personal realiza a avaliação e publica o primeiro treino.
6. O nutricionista realiza a consulta e publica o plano alimentar.
7. O aluno inicia a jornada, faz check-in e registra a execução.
8. Toda semana, responde um check-in curto sobre adesão, energia, dificuldade e possíveis desconfortos.
9. O sistema identifica queda de presença ou adesão e cria um alerta para a equipe.
10. A equipe intervém, registra a ação e ajusta o plano quando necessário.
11. Ao fim do ciclo, o aluno recebe um relatório de evolução e uma proposta de renovação.

## 6. Escopo do MVP

### 6.1 Acesso e segurança

- autenticação por e-mail ou telefone;
- recuperação de acesso;
- controle de acesso baseado em perfil;
- aceite de termos e consentimento de compartilhamento;
- registro de auditoria para acessos e alterações sensíveis;
- validação manual inicial de CREF e CRN.

### 6.2 Gestão de academia

- cadastro de unidade;
- cadastro e convite de profissionais;
- cadastro e convite de alunos;
- criação de pacotes;
- visão de alunos ativos, inativos e em risco;
- relatório simples de check-ins.

### 6.3 Jornada do aluno

- seleção de objetivo;
- questionário inicial;
- vínculo com academia, personal e nutricionista;
- ciclo com data inicial, metas e revisões;
- tela “Hoje” com treino, alimentação, compromissos e progresso.

### 6.4 Treinos

- biblioteca inicial de exercícios com vídeo ou imagem;
- criação de fichas pelo profissional;
- séries, repetições, carga, intervalo e observações;
- registro de treino concluído;
- registro de carga e percepção de esforço;
- histórico por exercício;
- bloqueio de prescrição para perfis não autorizados.

### 6.5 Nutrição

- anamnese nutricional;
- plano alimentar por refeições;
- quantidades, horários e substituições;
- registro simples de adesão;
- retorno e revisão do plano;
- bloqueio de prescrição para perfis não autorizados.

### 6.6 Frequência

- check-in por QR Code da unidade;
- limite de um check-in válido por intervalo configurável;
- histórico de presença;
- alerta após período sem frequência;
- registro manual autorizado para contingência.

### 6.7 Evolução

- peso, medidas e composição corporal informada por profissional;
- fotos privadas de evolução;
- frequência de treino;
- evolução de cargas;
- adesão alimentar declarada;
- relatório consolidado do ciclo.

### 6.8 Comunicação e alertas

- comentários vinculados ao aluno;
- notificações internas;
- lembretes de treino, consulta e check-in semanal;
- alerta de risco de abandono;
- registro da intervenção realizada.

### 6.9 Cobrança

- cadastro de planos e pacotes;
- assinatura por provedor externo com Pix e cartão;
- registro de pagamento, falha e cancelamento;
- relatório de valores devidos aos parceiros;
- repasse inicialmente conciliado pela administração.

### 6.10 Administração

- gestão de usuários e unidades;
- validação profissional;
- gestão de planos;
- visão de assinaturas;
- trilha de auditoria;
- suporte e suspensão de acesso.

## 7. Fora do MVP

- acesso a várias academias com uma única assinatura;
- rede social pública;
- chamadas de vídeo dentro do aplicativo;
- integração com relógios e dispositivos vestíveis;
- leitura automática de equipamentos;
- prescrição de treino ou dieta por inteligência artificial;
- marketplace aberto de suplementos;
- reconhecimento corporal por imagem;
- prontuário médico;
- integração direta com catracas no primeiro piloto;
- ranking público por peso ou aparência.

Esses itens ficam fora para reduzir custo, risco regulatório e tempo de lançamento.

## 8. Permissões e privacidade

Dados de saúde, avaliação, alimentação, fotos e evolução exigem acesso restrito e consentimento claro.

### Academia pode acessar

- frequência;
- status da jornada;
- existência de treino e plano alimentar ativos;
- alertas operacionais;
- indicadores consolidados.

A academia não deve acessar automaticamente anamnese nutricional, fotos privadas ou observações clínicas.

### Personal pode acessar

- avaliação física;
- treinos, cargas e frequência;
- restrições informadas pelo aluno;
- resumo nutricional necessário e autorizado.

### Nutricionista pode acessar

- anamnese e plano alimentar;
- medidas e evolução autorizadas;
- resumo da frequência e intensidade dos treinos;
- restrições relevantes informadas pelo aluno.

### Inteligência artificial

Quando adicionada, poderá:

- resumir dados para o profissional;
- sugerir mensagens de acompanhamento;
- identificar risco de abandono;
- organizar informações;
- gerar relatórios administrativos.

Não poderá prescrever dieta, suplemento ou programa de exercício sem revisão e responsabilidade de profissional habilitado.

## 9. Modelo de receita inicial

### Mensalidade da academia

Hipótese para validação:

| Plano | Limite inicial | Preço sugerido |
| --- | ---: | ---: |
| Academia Start | até 100 alunos acompanhados | R$ 199/mês |
| Academia Pro | até 500 alunos acompanhados | R$ 399/mês |
| Academia Rede | múltiplas unidades | a partir de R$ 699/mês |

### Comissão

- entre 8% e 12% sobre pacotes integrados vendidos pela plataforma;
- percentual menor para academias com maior mensalidade;
- serviços presenciais extras podem ter comissão própria.

### Receitas futuras

- planos corporativos;
- eventos e desafios patrocinados;
- marketplace regional de profissionais;
- integração com catracas e sistemas de gestão;
- versão personalizada para redes;
- relatórios avançados de retenção.

## 10. Piloto recomendado

### Estrutura

- três academias, uma em cada cidade do Crajubar;
- três profissionais de Educação Física;
- três nutricionistas;
- 60 alunos, 20 por academia;
- ciclo de 90 dias;
- suporte próximo aos parceiros.

### Etapas

1. Entrevistar academias e profissionais.
2. Fechar parceiros do piloto.
3. Mapear operação atual e valores praticados.
4. Configurar os pacotes.
5. Cadastrar os primeiros alunos.
6. Operar o ciclo acompanhado.
7. Medir adesão, abandono, satisfação e disposição de pagamento.

## 11. Métricas iniciais

Os valores abaixo são metas de teste, não garantias:

- pelo menos 80% dos convidados concluem o cadastro;
- pelo menos 70% recebem treino e plano alimentar dentro do prazo combinado;
- pelo menos 60% permanecem ativos na oitava semana;
- redução de faltas em comparação com o período anterior;
- pelo menos 30% dos alunos em risco retornam após intervenção;
- duas das três academias demonstram disposição de pagar pelo produto;
- profissionais gastam menos tempo em tarefas administrativas;
- satisfação do aluno igual ou superior a 8 em 10.

## 12. Arquitetura sugerida

### Aplicações

- aplicativo do aluno: React Native com Expo;
- painel web: Next.js, React e TypeScript;
- API: Node.js com NestJS;
- banco de dados: PostgreSQL com Prisma;
- armazenamento de mídia: serviço compatível com S3;
- filas e tarefas agendadas: Redis/BullMQ quando necessário;
- notificações: push, e-mail e integração futura com WhatsApp;
- pagamentos: provedor externo com Pix, cartão e webhooks.

### Organização sugerida

```text
triade-fit/
  apps/
    mobile/
    web/
    api/
  packages/
    contracts/
    config/
    ui/
  docs/
```

O projeto pode começar como monorepo para compartilhar tipos, validações e contratos entre as aplicações.

## 13. Entidades iniciais

- User
- Role
- StudentProfile
- ProfessionalProfile
- Gym
- GymUnit
- GymMembership
- ProfessionalCredential
- StudentProfessionalLink
- Consent
- Journey
- Goal
- PhysicalAssessment
- NutritionAssessment
- WorkoutPlan
- WorkoutSession
- Exercise
- ExerciseLog
- NutritionPlan
- Meal
- FoodSubstitution
- NutritionAdherenceLog
- GymCheckIn
- WeeklyCheckIn
- ProgressMeasurement
- ProgressPhoto
- RiskAlert
- Intervention
- Appointment
- Subscription
- Payment
- Payout
- Notification
- AuditLog

## 14. Primeiras histórias de usuário

### Aluno

- Como aluno, quero visualizar o que preciso fazer hoje para não me perder entre treino e alimentação.
- Como aluno, quero registrar minha evolução para perceber resultados além do peso.
- Como aluno, quero controlar quais profissionais podem acessar meus dados.

### Personal

- Como personal, quero prescrever e revisar treinos para acompanhar vários alunos com organização.
- Como personal, quero ser alertado quando um aluno parar de treinar.

### Nutricionista

- Como nutricionista, quero prescrever planos e substituições dentro do aplicativo.
- Como nutricionista, quero conhecer a frequência de treino autorizada para contextualizar meu acompanhamento.

### Academia

- Como academia, quero identificar alunos com risco de abandono antes do cancelamento.
- Como academia, quero vender um pacote de maior valor sem precisar construir tecnologia própria.

## 15. Sequência de desenvolvimento

### Fase 0 — Descoberta

- entrevistas;
- validação de preço;
- escolha dos parceiros;
- desenho final das permissões;
- protótipo navegável.

### Fase 1 — Fundação

- autenticação;
- perfis e permissões;
- academia, equipe e alunos;
- consentimentos;
- jornada.

### Fase 2 — Entrega profissional

- treinos;
- nutrição;
- avaliações;
- agenda.

### Fase 3 — Acompanhamento

- QR Code;
- evolução;
- check-in semanal;
- alertas e intervenções.

### Fase 4 — Negócio

- planos;
- cobrança;
- relatórios;
- administração.

### Fase 5 — Piloto

- implantação;
- acompanhamento semanal;
- coleta de métricas;
- correções;
- decisão de expansão.

## 16. Regras profissionais

- dietas e planos alimentares somente poderão ser publicados por nutricionistas devidamente habilitados;
- treinos serão prescritos e supervisionados por profissionais de Educação Física habilitados;
- teleatendimentos devem observar as regras dos respectivos conselhos;
- credenciais profissionais serão verificadas;
- todo ajuste deve registrar autor, data e versão;
- o aplicativo não substituirá avaliação profissional ou atendimento médico.

Referências iniciais:

- [Lei nº 9.696/1998 — profissão de Educação Física](https://www.planalto.gov.br/ccivil_03/leis/l9696.htm)
- [CFN — regulamentação da telenutrição](https://cfn.org.br/cfn-publica-resolucao-que-regulamenta-a-telenutricao/)

## 17. Decisões pendentes

1. Confirmar ou substituir o nome Tríade Fit.
2. Escolher se o primeiro pacote será voltado a emagrecimento ou ganho de massa.
3. Definir se o piloto será gratuito ou pago com valor reduzido.
4. Escolher as academias e profissionais parceiros.
5. Validar preços e forma de repasse.
6. Definir identidade visual.
7. Escolher entre aplicativo nativo desde o início ou PWA para o piloto.

## 18. Próximo passo recomendado

Realizar entrevistas curtas com três gestores de academia, três profissionais de Educação Física, três nutricionistas e dez alunos. As respostas devem validar:

- o problema mais caro para a academia;
- como os profissionais trabalham hoje;
- quais dados realmente precisam compartilhar;
- quanto cada parte aceita pagar ou receber;
- qual público deve ser usado no primeiro ciclo;
- quais funções são indispensáveis para abandonar planilhas e WhatsApp.
