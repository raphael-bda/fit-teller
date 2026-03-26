import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { boardDecisions, dashboardKpis } from "@/data/mock-data";

export function DiretoriaPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Diretoria" title="Visão estratégica consolidada" description="Página executiva com prioridades do mês, decisões recentes, indicadores consolidados e alertas institucionais para acompanhamento da liderança." badge="3 prioridades críticas" />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Prioridades do mês" value="3" detail="Receita, retenção e SLA" />
        <StatCard label="Marcos no prazo" value="92%" detail="Programas estratégicos" />
        <StatCard label="Decisões abertas" value="5" detail="Em execução ou monitoramento" />
      </div>
      <section className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <Card className="border-white/60 bg-white/90">
          <CardHeader>
            <CardTitle>Decisões recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {boardDecisions.map((decision) => (
              <div key={decision.id} className="rounded-2xl border border-border/70 bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">{decision.title}</h3>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">{decision.status}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{decision.impact}</p>
                <p className="mt-2 text-xs text-primary">Responsável: {decision.owner} • Prazo: {decision.dueDate}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-white/60 bg-white/90">
          <CardHeader>
            <CardTitle>Indicadores consolidados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardKpis.slice(0, 4).map((item) => (
              <div key={item.id} className="rounded-2xl border border-border/70 bg-background p-4">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 font-display text-3xl font-bold">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.trend}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-2 font-display text-3xl font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      </CardContent>
    </Card>
  );
}
