export type SectorId =
  | "dashboard"
  | "comercial"
  | "secretaria"
  | "financeiro"
  | "pedagogico"
  | "marketing"
  | "diretoria";

export type TaskStatus = "pendente" | "em andamento" | "concluida";
export type Priority = "baixa" | "media" | "alta" | "critica";

export type User = {
  id: string;
  name: string;
  role: string;
  sector: SectorId;
  avatar: string;
  status: "online" | "ocupado" | "reuniao" | "offline";
};

export type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  category: "alerta" | "reuniao" | "tarefa" | "comunicado";
};

export type KPI = {
  id: string;
  label: string;
  value: string;
  trend: string;
  tone: "positive" | "warning" | "neutral";
};

export type ChartPoint = {
  month: string;
  receita: number;
  matriculas: number;
  meta: number;
  realizado: number;
};

export type Announcement = {
  id: string;
  title: string;
  sector: SectorId;
  description: string;
  authorId: string;
  createdAt: string;
};

export type AlertItem = {
  id: string;
  title: string;
  description: string;
  severity: Priority;
  sector: SectorId;
};

export type ActivityItem = {
  id: string;
  actorId: string;
  action: string;
  target: string;
  time: string;
};

export type Channel = {
  id: string;
  name: string;
  sector: SectorId;
  topic: string;
  pinnedCount: number;
};

export type Message = {
  id: string;
  channelId: string;
  authorId: string;
  content: string;
  sentAt: string;
  pinned?: boolean;
};

export type Meeting = {
  id: string;
  title: string;
  sector: SectorId;
  date: string;
  priority: Priority;
  participants: string[];
  summary: string;
  decisions: string[];
  nextSteps: string[];
  owners: string[];
  tags: string[];
};

export type Task = {
  id: string;
  title: string;
  sector: SectorId;
  status: TaskStatus;
  priority: Priority;
  assigneeId: string;
  dueDate: string;
  origin: string;
  linkedMeetingId?: string;
};

export type Lead = {
  id: string;
  name: string;
  courseInterest: string;
  stage: "novo" | "contato" | "qualificacao" | "negociacao" | "fechado";
  source: string;
  ownerId: string;
  nextAction: string;
  score: number;
};

export type Protocol = {
  id: string;
  student: string;
  type: string;
  status: "recebido" | "em analise" | "aguardando" | "concluido";
  deadline: string;
  sectorOwner: string;
};

export type Charge = {
  id: string;
  student: string;
  amount: number;
  status: "pendente" | "vencida" | "paga";
  delayDays: number;
  dueDate: string;
};

export type Student = {
  id: string;
  name: string;
  class: string;
  risk: "baixo" | "medio" | "alto";
  issue: string;
  attendance: number;
};

export type Campaign = {
  id: string;
  name: string;
  channel: string;
  leads: number;
  conversions: number;
  roi: number;
  status: "ativa" | "otimizacao" | "encerrada";
};

export type KnowledgeArticle = {
  id: string;
  title: string;
  category: string;
  summary: string;
  updatedAt: string;
  relevance: string;
};

export type BoardDecision = {
  id: string;
  title: string;
  impact: string;
  owner: string;
  dueDate: string;
  status: "em execucao" | "monitoramento" | "concluida";
};

export type SectorSnapshot = {
  sector: SectorId;
  headline: string;
  metric: string;
  status: "estavel" | "atencao" | "acelerando";
};
