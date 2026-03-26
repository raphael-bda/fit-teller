import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  FolderKanban,
  GraduationCap,
  Megaphone,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const navigation: NavItem[] = [
  { label: "Dashboard", path: "/", icon: ChartNoAxesCombined },
  { label: "Comunicação", path: "/comunicacao", icon: MessageSquareText },
  { label: "Reuniões IA", path: "/reunioes-ia", icon: Sparkles },
  { label: "Tarefas", path: "/tarefas", icon: FolderKanban },
  { label: "Comercial", path: "/comercial", icon: BriefcaseBusiness },
  { label: "Secretaria", path: "/secretaria", icon: Building2 },
  { label: "Financeiro", path: "/financeiro", icon: CircleDollarSign },
  { label: "Pedagógico", path: "/pedagogico", icon: GraduationCap },
  { label: "Marketing", path: "/marketing", icon: Megaphone },
  { label: "Conhecimento", path: "/conhecimento", icon: BookOpenText },
  { label: "Diretoria", path: "/diretoria", icon: UsersRound },
  { label: "Configurações", path: "/configuracoes", icon: Settings },
];

export const environmentBadge = {
  label: "Ambiente institucional",
  detail: "Operação mockada pronta para API",
  icon: ShieldCheck,
};
