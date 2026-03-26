import type {
  ActivityItem,
  AlertItem,
  Announcement,
  BoardDecision,
  Campaign,
  Channel,
  Charge,
  ChartPoint,
  KPI,
  KnowledgeArticle,
  Lead,
  Meeting,
  Message,
  Notification,
  Protocol,
  SectorSnapshot,
  Student,
  Task,
  User,
} from "@/types/entities";

export const currentUser: User = {
  id: "u1",
  name: "Mariana Rocha",
  role: "Coordenadora de Operações",
  sector: "dashboard",
  avatar: "MR",
  status: "online",
};

export const users: User[] = [
  currentUser,
  { id: "u2", name: "Rafael Costa", role: "Diretor Comercial", sector: "comercial", avatar: "RC", status: "online" },
  { id: "u3", name: "Bianca Nogueira", role: "Secretaria Acadêmica", sector: "secretaria", avatar: "BN", status: "ocupado" },
  { id: "u4", name: "Lívia Prado", role: "Financeiro", sector: "financeiro", avatar: "LP", status: "online" },
  { id: "u5", name: "João Mendes", role: "Coordenação Pedagógica", sector: "pedagogico", avatar: "JM", status: "reuniao" },
  { id: "u6", name: "Alice Teixeira", role: "Marketing", sector: "marketing", avatar: "AT", status: "online" },
  { id: "u7", name: "Fernando Luz", role: "Diretoria", sector: "diretoria", avatar: "FL", status: "online" },
  { id: "u8", name: "Camila Duarte", role: "Cobrança", sector: "financeiro", avatar: "CD", status: "offline" },
];

export const notifications: Notification[] = [
  { id: "n1", title: "Protocolos próximos do SLA", description: "5 solicitações precisam de resposta até 17h.", time: "há 12 min", category: "alerta" },
  { id: "n2", title: "Reunião de diretoria confirmada", description: "Sala IA agendada para 15:30 com resumo automático.", time: "há 25 min", category: "reuniao" },
  { id: "n3", title: "Nova tarefa vinculada à ata", description: "Atualizar política de negociação foi atribuída ao Financeiro.", time: "há 47 min", category: "tarefa" },
];

export const dashboardKpis: KPI[] = [
  { id: "k1", label: "Matrículas do mês", value: "186", trend: "+14% vs. fevereiro", tone: "positive" },
  { id: "k2", label: "Rematrículas", value: "132", trend: "+8% com retenção estável", tone: "positive" },
  { id: "k3", label: "Conversão", value: "27,4%", trend: "+2,1 p.p. após novo playbook", tone: "positive" },
  { id: "k4", label: "Receita", value: "R$ 482 mil", trend: "93% da meta mensal", tone: "warning" },
  { id: "k5", label: "Protocolos pendentes", value: "23", trend: "8 acima da faixa ideal", tone: "warning" },
  { id: "k6", label: "Cobranças em atraso", value: "41", trend: "queda de 6 casos críticos", tone: "neutral" },
];

export const monthlyPerformance: ChartPoint[] = [
  { month: "Jan", receita: 398000, matriculas: 122, meta: 410000, realizado: 398000 },
  { month: "Fev", receita: 421000, matriculas: 140, meta: 430000, realizado: 421000 },
  { month: "Mar", receita: 482000, matriculas: 186, meta: 520000, realizado: 482000 },
  { month: "Abr", receita: 468000, matriculas: 176, meta: 540000, realizado: 468000 },
  { month: "Mai", receita: 505000, matriculas: 191, meta: 560000, realizado: 505000 },
  { month: "Jun", receita: 548000, matriculas: 208, meta: 580000, realizado: 548000 },
];

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Janela de rematrícula antecipada aprovada",
    sector: "comercial",
    description: "Comercial e Marketing iniciam comunicação segmentada com ofertas de permanência a partir de 28/03.",
    authorId: "u7",
    createdAt: "2026-03-26T08:30:00",
  },
  {
    id: "a2",
    title: "Padronização de resposta para documentos acadêmicos",
    sector: "secretaria",
    description: "Secretaria passa a operar com novo SLA de 24h para protocolos com documentação completa.",
    authorId: "u3",
    createdAt: "2026-03-25T14:10:00",
  },
  {
    id: "a3",
    title: "Roteiro financeiro para renegociação atualizado",
    sector: "financeiro",
    description: "Time de cobrança já pode usar o fluxo de proposta em 3 faixas de atraso com apoio da diretoria.",
    authorId: "u4",
    createdAt: "2026-03-24T11:00:00",
  },
];

export const alerts: AlertItem[] = [
  { id: "al1", title: "Meta comercial abaixo da curva em 2 polos", description: "Unidades Leste e Centro com conversão abaixo de 21% nesta semana.", severity: "alta", sector: "comercial" },
  { id: "al2", title: "Fila de protocolos de transferência", description: "Há 9 solicitações aguardando conferência documental.", severity: "media", sector: "secretaria" },
  { id: "al3", title: "Recebíveis vencidos acima do tolerado", description: "Faixa acima de 30 dias concentra R$ 96 mil em risco.", severity: "critica", sector: "financeiro" },
];

export const activities: ActivityItem[] = [
  { id: "ac1", actorId: "u2", action: "atualizou", target: "previsão semanal de matrículas", time: "09:12" },
  { id: "ac2", actorId: "u6", action: "publicou", target: "campanha de captação para pós-graduação", time: "09:40" },
  { id: "ac3", actorId: "u4", action: "vinculou", target: "tarefa de renegociação à ata da reunião financeira", time: "10:05" },
  { id: "ac4", actorId: "u5", action: "registrou", target: "alerta pedagógico sobre evasão da turma EJA 02", time: "10:41" },
];

export const sectorSnapshots: SectorSnapshot[] = [
  { sector: "comercial", headline: "Pipeline com tração forte em qualificação", metric: "68 leads quentes", status: "acelerando" },
  { sector: "secretaria", headline: "SLA operando em 89%", metric: "23 protocolos abertos", status: "atencao" },
  { sector: "financeiro", headline: "Recuperação reagiu após novo fluxo", metric: "R$ 71 mil recuperados", status: "estavel" },
  { sector: "pedagogico", headline: "Risco acadêmico concentrado em 2 turmas", metric: "14 alunos monitorados", status: "atencao" },
  { sector: "marketing", headline: "Campanhas com CPL abaixo da meta", metric: "1.240 leads gerados", status: "acelerando" },
  { sector: "diretoria", headline: "3 prioridades estratégicas em execução", metric: "92% dos marcos no prazo", status: "estavel" },
];

export const channels: Channel[] = [
  { id: "c1", name: "avisos-gerais", sector: "dashboard", topic: "Comunicados oficiais e alinhamentos institucionais", pinnedCount: 4 },
  { id: "c2", name: "comercial", sector: "comercial", topic: "Captação, follow-up e metas semanais", pinnedCount: 2 },
  { id: "c3", name: "secretaria", sector: "secretaria", topic: "Protocolos, matrícula e atendimento acadêmico", pinnedCount: 3 },
  { id: "c4", name: "financeiro", sector: "financeiro", topic: "Cobrança, recebíveis e negociação", pinnedCount: 2 },
  { id: "c5", name: "pedagogico", sector: "pedagogico", topic: "Risco acadêmico, turmas e acompanhamento", pinnedCount: 3 },
  { id: "c6", name: "marketing", sector: "marketing", topic: "Campanhas, mídia e conteúdo", pinnedCount: 1 },
  { id: "c7", name: "diretoria", sector: "diretoria", topic: "Decisões estratégicas e prioridades institucionais", pinnedCount: 5 },
];

export const messages: Message[] = [
  { id: "m1", channelId: "c1", authorId: "u7", content: "Diretoria aprovou a virada do processo de rematrícula antecipada. Comercial e Marketing alinham disparos ainda hoje.", sentAt: "08:14", pinned: true },
  { id: "m2", channelId: "c1", authorId: "u1", content: "Painel executivo foi atualizado com os KPIs de março. Validem qualquer desvio até o fechamento das 16h.", sentAt: "08:27" },
  { id: "m3", channelId: "c2", authorId: "u2", content: "Equipe, os leads com score acima de 80 precisam de retorno em até 30 minutos. Vamos proteger essa janela.", sentAt: "09:02", pinned: true },
  { id: "m4", channelId: "c2", authorId: "u6", content: "Os anúncios da campanha noturna estão trazendo tráfego qualificado. Vou abrir um recorte por praça ainda nesta manhã.", sentAt: "09:11" },
  { id: "m5", channelId: "c3", authorId: "u3", content: "Protocolos de transferência entram em regime de prioridade alta até sexta. O backlog está concentrado em conferência documental.", sentAt: "09:18", pinned: true },
  { id: "m6", channelId: "c4", authorId: "u4", content: "Atualizei o script de renegociação por faixa de atraso. Time de cobrança já pode usar a nova abordagem no turno da tarde.", sentAt: "09:43", pinned: true },
  { id: "m7", channelId: "c5", authorId: "u5", content: "Turma EJA 02 teve queda de engajamento pela terceira semana seguida. Vou subir lista priorizada de alunos para busca ativa.", sentAt: "10:06" },
  { id: "m8", channelId: "c6", authorId: "u6", content: "Fechamos CPL abaixo da meta no Instagram e no Google Search. Próximo passo é melhorar a qualificação das landing pages.", sentAt: "10:12" },
  { id: "m9", channelId: "c7", authorId: "u7", content: "A partir da próxima semana, decisões críticas precisam sair vinculadas a responsáveis, prazo e indicador de acompanhamento.", sentAt: "10:21", pinned: true },
];

export const meetings: Meeting[] = [
  {
    id: "mt1",
    title: "Comitê de Recuperação Financeira",
    sector: "financeiro",
    date: "2026-03-26T15:30:00",
    priority: "critica",
    participants: ["u4", "u7", "u8", "u1"],
    summary: "A IA identificou concentração de risco na carteira acima de 30 dias e sugeriu divisão das abordagens por capacidade de pagamento e vínculo acadêmico.",
    decisions: [
      "Criar régua de negociação em 3 níveis até sexta.",
      "Separar inadimplentes com risco de evasão para abordagem conjunta com Secretaria.",
      "Subir relatório diário de recuperação no dashboard executivo.",
    ],
    nextSteps: [
      "Financeiro desenha roteiro de cobrança até 27/03.",
      "Operações conecta indicador no painel até 28/03.",
      "Diretoria valida tolerâncias de desconto até 31/03.",
    ],
    owners: ["u4", "u1", "u7"],
    tags: ["inadimplência", "receita", "prioridade institucional"],
  },
  {
    id: "mt2",
    title: "Ritual Comercial de Pipeline",
    sector: "comercial",
    date: "2026-03-26T11:00:00",
    priority: "alta",
    participants: ["u2", "u6", "u1"],
    summary: "A leitura automática aponta ganho de velocidade em qualificação, mas baixa previsibilidade em negociação para duas unidades específicas.",
    decisions: [
      "Manter SLA de 30 min para leads quentes.",
      "Redistribuir lista de follow-up da unidade Leste.",
      "Integrar sinais de campanha no score comercial.",
    ],
    nextSteps: [
      "Marketing envia origem consolidada dos leads até o fim do dia.",
      "Comercial revisa script de objeções no início da noite.",
    ],
    owners: ["u2", "u6"],
    tags: ["matrículas", "pipeline", "captação"],
  },
  {
    id: "mt3",
    title: "Acompanhamento Pedagógico de Risco",
    sector: "pedagogico",
    date: "2026-03-25T16:00:00",
    priority: "media",
    participants: ["u5", "u3", "u1"],
    summary: "A IA destacou padrão de faltas recorrentes em duas turmas e sugeriu contato preventivo antes da etapa avaliativa.",
    decisions: [
      "Abrir busca ativa para 14 alunos com risco alto.",
      "Registrar justificativas acadêmicas diretamente na base de conhecimento.",
    ],
    nextSteps: [
      "Secretaria confirma dados de contato até amanhã.",
      "Pedagógico classifica perfis em faixa de risco até 27/03.",
    ],
    owners: ["u5", "u3"],
    tags: ["evasão", "alunos", "busca ativa"],
  },
];

export const tasks: Task[] = [
  { id: "t1", title: "Publicar régua de renegociação por faixa de atraso", sector: "financeiro", status: "em andamento", priority: "critica", assigneeId: "u4", dueDate: "2026-03-27", origin: "Ata: Comitê de Recuperação Financeira", linkedMeetingId: "mt1" },
  { id: "t2", title: "Redistribuir follow-up da unidade Leste", sector: "comercial", status: "pendente", priority: "alta", assigneeId: "u2", dueDate: "2026-03-26", origin: "Ritual Comercial de Pipeline", linkedMeetingId: "mt2" },
  { id: "t3", title: "Subir indicador diário de recuperação no dashboard", sector: "dashboard", status: "pendente", priority: "alta", assigneeId: "u1", dueDate: "2026-03-28", origin: "Ata: Comitê de Recuperação Financeira", linkedMeetingId: "mt1" },
  { id: "t4", title: "Conferir documentos dos protocolos de transferência", sector: "secretaria", status: "em andamento", priority: "media", assigneeId: "u3", dueDate: "2026-03-27", origin: "Fila operacional" },
  { id: "t5", title: "Classificar alunos em risco alto na turma EJA 02", sector: "pedagogico", status: "pendente", priority: "alta", assigneeId: "u5", dueDate: "2026-03-27", origin: "Reunião pedagógica", linkedMeetingId: "mt3" },
  { id: "t6", title: "Ajustar landing page da campanha noturna", sector: "marketing", status: "concluida", priority: "media", assigneeId: "u6", dueDate: "2026-03-25", origin: "Performance de mídia" },
];

export const leads: Lead[] = [
  { id: "l1", name: "Ana Paula Vieira", courseInterest: "Pós em Gestão Escolar", stage: "negociacao", source: "Meta Ads", ownerId: "u2", nextAction: "Retorno com condição até 14h", score: 92 },
  { id: "l2", name: "Carlos Henrique", courseInterest: "EJA Modular", stage: "qualificacao", source: "Google Search", ownerId: "u2", nextAction: "Apresentar trilha pedagógica", score: 81 },
  { id: "l3", name: "Renata Farias", courseInterest: "Ensino Técnico", stage: "contato", source: "Indicação", ownerId: "u2", nextAction: "Primeiro contato via WhatsApp", score: 70 },
  { id: "l4", name: "Danilo Azevedo", courseInterest: "Supletivo Premium", stage: "novo", source: "Landing Page", ownerId: "u2", nextAction: "Qualificar interesse e urgência", score: 65 },
  { id: "l5", name: "Jéssica Lima", courseInterest: "Pós em Psicopedagogia", stage: "fechado", source: "Instagram", ownerId: "u2", nextAction: "Onboarding concluído", score: 95 },
];

export const protocols: Protocol[] = [
  { id: "p1", student: "Bruna Souza", type: "Declaração de matrícula", status: "concluido", deadline: "2026-03-26", sectorOwner: "Secretaria Central" },
  { id: "p2", student: "Paulo César", type: "Transferência externa", status: "em analise", deadline: "2026-03-27", sectorOwner: "Secretaria Central" },
  { id: "p3", student: "Giselle Nunes", type: "Reabertura de matrícula", status: "aguardando", deadline: "2026-03-28", sectorOwner: "Atendimento Acadêmico" },
  { id: "p4", student: "Thiago Melo", type: "Histórico escolar", status: "recebido", deadline: "2026-03-29", sectorOwner: "Secretaria Central" },
];

export const charges: Charge[] = [
  { id: "ch1", student: "Mateus Ribeiro", amount: 1820, status: "vencida", delayDays: 42, dueDate: "2026-02-12" },
  { id: "ch2", student: "Helena Castro", amount: 950, status: "pendente", delayDays: 4, dueDate: "2026-03-22" },
  { id: "ch3", student: "Rogério Santos", amount: 1240, status: "paga", delayDays: 0, dueDate: "2026-03-18" },
  { id: "ch4", student: "Larissa Porto", amount: 2180, status: "vencida", delayDays: 16, dueDate: "2026-03-10" },
];

export const students: Student[] = [
  { id: "s1", name: "Bianca Almeida", class: "EJA 02", risk: "alto", issue: "Faltas sucessivas nas últimas 3 semanas", attendance: 62 },
  { id: "s2", name: "Felipe Moura", class: "Técnico ADM", risk: "medio", issue: "Baixo envio de atividades", attendance: 76 },
  { id: "s3", name: "Sara Campos", class: "Pós Educação", risk: "baixo", issue: "Solicitou apoio para recuperação", attendance: 88 },
  { id: "s4", name: "Igor Teles", class: "EJA 02", risk: "alto", issue: "Desengajamento e atraso em avaliações", attendance: 58 },
];

export const campaigns: Campaign[] = [
  { id: "cp1", name: "Captação Pós Março", channel: "Google Search", leads: 412, conversions: 68, roi: 3.8, status: "ativa" },
  { id: "cp2", name: "EJA Turno Noturno", channel: "Meta Ads", leads: 356, conversions: 51, roi: 3.1, status: "otimizacao" },
  { id: "cp3", name: "Recuperação de Leads Frios", channel: "CRM + Email", leads: 188, conversions: 29, roi: 2.7, status: "ativa" },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  { id: "ka1", title: "POP de Matrícula e Conferência Documental", category: "Processos", summary: "Fluxo padrão para matrícula, validação documental e registro no sistema institucional.", updatedAt: "2026-03-22", relevance: "Mais acessado pela Secretaria" },
  { id: "ka2", title: "Script de Negociação por Faixa de Atraso", category: "Cobrança", summary: "Abordagem recomendada para até 7 dias, 8 a 30 dias e acima de 30 dias de atraso.", updatedAt: "2026-03-25", relevance: "Relacionado a recuperação financeira" },
  { id: "ka3", title: "Roteiro de Reuniões com IA", category: "Gestão", summary: "Modelo institucional para registrar contexto, decisões, responsáveis e próximos passos com síntese automatizada.", updatedAt: "2026-03-24", relevance: "Usado pela Diretoria e Operações" },
  { id: "ka4", title: "Política Institucional de Comunicação Interna", category: "Governança", summary: "Critérios para uso de canais, avisos críticos, linguagem e escalonamento entre setores.", updatedAt: "2026-03-19", relevance: "Base para canais e comunicados" },
];

export const boardDecisions: BoardDecision[] = [
  { id: "d1", title: "Antecipar campanha de rematrícula", impact: "Protege retenção e estabilidade de caixa no próximo ciclo.", owner: "Fernando Luz", dueDate: "2026-03-31", status: "em execucao" },
  { id: "d2", title: "Padronizar SLAs institucionais por setor", impact: "Aumenta previsibilidade operacional e clareza para diretoria.", owner: "Mariana Rocha", dueDate: "2026-04-05", status: "monitoramento" },
  { id: "d3", title: "Formalizar rituais com atas assistidas por IA", impact: "Melhora rastreabilidade de decisões e execução de tarefas.", owner: "Fernando Luz", dueDate: "2026-04-10", status: "em execucao" },
];
