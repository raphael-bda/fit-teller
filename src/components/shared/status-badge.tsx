import { Badge } from "@/components/ui/badge";
import type { Priority, TaskStatus } from "@/types/entities";

const priorityMap: Record<Priority, { label: string; variant: "warning" | "danger" | "default" | "secondary" }> = {
  baixa: { label: "Baixa", variant: "secondary" },
  media: { label: "Média", variant: "default" },
  alta: { label: "Alta", variant: "warning" },
  critica: { label: "Crítica", variant: "danger" },
};

const statusMap: Record<TaskStatus, { label: string; variant: "secondary" | "warning" | "success" }> = {
  pendente: { label: "Pendente", variant: "secondary" },
  "em andamento": { label: "Em andamento", variant: "warning" },
  concluida: { label: "Concluída", variant: "success" },
};

export function PriorityBadge({ value }: { value: Priority }) {
  const config = priorityMap[value];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

export function TaskStatusBadge({ value }: { value: TaskStatus }) {
  const config = statusMap[value];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
