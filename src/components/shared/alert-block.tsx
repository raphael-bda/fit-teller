import { AlertTriangle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { alerts } from "@/data/mock-data";
import { PriorityBadge } from "@/components/shared/status-badge";

export function AlertBlock() {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="size-4 text-amber-500" />
          Alertas operacionais
        </CardTitle>
        <CardDescription>Itens que pedem intervenção ou monitoramento imediato</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-xl border border-border/70 bg-muted/50 p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
              <h4 className="font-medium">{alert.title}</h4>
              <PriorityBadge value={alert.severity} />
            </div>
            <p className="text-sm text-muted-foreground">{alert.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
