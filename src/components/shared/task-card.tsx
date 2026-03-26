import { CalendarClock } from "lucide-react";

import { PriorityBadge, TaskStatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { users } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";
import type { Task } from "@/types/entities";

export function TaskCard({ task }: { task: Task }) {
  const assignee = users.find((user) => user.id === task.assigneeId);

  return (
    <Card className="border-white/70 bg-white/95">
      <CardContent className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-muted-foreground">{task.origin}</p>
          </div>
          <PriorityBadge value={task.priority} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <TaskStatusBadge value={task.status} />
          <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {task.sector}
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">{assignee?.name}</p>
            <p>{assignee?.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock className="size-4" />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
