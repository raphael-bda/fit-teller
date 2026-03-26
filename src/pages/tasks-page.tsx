import { useMemo, useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { TaskCard } from "@/components/shared/task-card";
import { Card, CardContent } from "@/components/ui/card";
import { tasks } from "@/data/mock-data";
import type { Priority, SectorId, TaskStatus } from "@/types/entities";

const statuses: Array<TaskStatus | "todos"> = ["todos", "pendente", "em andamento", "concluida"];
const priorities: Array<Priority | "todas"> = ["todas", "baixa", "media", "alta", "critica"];
const sectors: Array<SectorId | "todos"> = ["todos", "dashboard", "comercial", "secretaria", "financeiro", "pedagogico", "marketing", "diretoria"];

export function TasksPage() {
  const [status, setStatus] = useState<TaskStatus | "todos">("todos");
  const [priority, setPriority] = useState<Priority | "todas">("todas");
  const [sector, setSector] = useState<SectorId | "todos">("todos");

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        const matchesStatus = status === "todos" || task.status === status;
        const matchesPriority = priority === "todas" || task.priority === priority;
        const matchesSector = sector === "todos" || task.sector === sector;
        return matchesStatus && matchesPriority && matchesSector;
      }),
    [priority, sector, status],
  );

  const boardColumns: TaskStatus[] = ["pendente", "em andamento", "concluida"];

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Execução" title="Tarefas conectadas à operação real" description="Painel com filtros por setor, status e prioridade, incluindo rastreabilidade de origem e vínculo com reuniões." badge={`${filteredTasks.length} itens visíveis`} />
      <Card className="border-white/60 bg-white/90">
        <CardContent className="grid gap-4 p-5 md:grid-cols-3">
          <FilterPills label="Setor" values={sectors} current={sector} onChange={setSector} />
          <FilterPills label="Status" values={statuses} current={status} onChange={setStatus} />
          <FilterPills label="Prioridade" values={priorities} current={priority} onChange={setPriority} />
        </CardContent>
      </Card>
      <div className="grid gap-6 xl:grid-cols-3">
        {boardColumns.map((column) => (
          <Card key={column} className="border-white/60 bg-white/90">
            <CardContent className="space-y-4 p-4">
              <div className="rounded-xl bg-background px-4 py-3">
                <h2 className="font-display text-lg font-semibold capitalize">{column}</h2>
              </div>
              {filteredTasks.filter((task) => task.status === column).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FilterPills<T extends string>({ label, values, current, onChange }: { label: string; values: T[]; current: T; onChange: (value: T) => void }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold">{label}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <button key={value} type="button" onClick={() => onChange(value)} className={`rounded-full px-3 py-2 text-xs font-semibold capitalize transition-all ${current === value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
