import { LightTable } from "@/components/shared/light-table";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leads } from "@/data/mock-data";

const stages = ["novo", "contato", "qualificacao", "negociacao", "fechado"] as const;

export function ComercialPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Comercial" title="Pipeline e performance de captação" description="Visão de leads por etapa, próximos follow-ups, taxa de conversão e priorização comercial para o ciclo atual." badge="Conversão em 27,4%" />
      <section className="grid gap-4 xl:grid-cols-5">
        {stages.map((stage) => {
          const stageLeads = leads.filter((lead) => lead.stage === stage);
          return (
            <Card key={stage} className="border-white/60 bg-white/90">
              <CardHeader>
                <CardTitle className="text-base capitalize">{stage}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {stageLeads.map((lead) => (
                  <div key={lead.id} className="rounded-xl border border-border/70 bg-background p-3">
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.courseInterest}</p>
                    <p className="mt-2 text-xs text-primary">Próximo passo: {lead.nextAction}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1fr,1.1fr]">
        <Card className="border-white/60 bg-white/90">
          <CardContent className="grid gap-4 p-5 md:grid-cols-3">
            <MetricBlock label="Leads quentes" value="68" description="Score acima de 80" />
            <MetricBlock label="Follow-ups hoje" value="24" description="11 até 14h" />
            <MetricBlock label="Matrículas previstas" value="43" description="Janela da semana" />
          </CardContent>
        </Card>
        <LightTable
          title="Leads recentes"
          description="Visão priorizada do pipeline"
          rows={leads}
          columns={[
            { header: "Lead", render: (lead) => <span className="font-medium">{lead.name}</span> },
            { header: "Curso", render: (lead) => lead.courseInterest },
            { header: "Origem", render: (lead) => lead.source },
            { header: "Score", render: (lead) => <span className="text-primary">{lead.score}</span> },
          ]}
        />
      </section>
    </div>
  );
}

function MetricBlock({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-background p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
