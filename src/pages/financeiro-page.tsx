import { LightTable } from "@/components/shared/light-table";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { charges } from "@/data/mock-data";
import { formatCurrency } from "@/lib/utils";

export function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Financeiro" title="Recebíveis, atrasos e previsão de caixa" description="Acompanhamento da carteira com cobranças pendentes, vencidas e pagas, além de alertas críticos de inadimplência." badge="Risco monitorado pela IA" />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Pendentes" value="R$ 118 mil" detail="A vencer em até 7 dias" />
        <StatCard label="Vencidas" value="R$ 96 mil" detail="Faixa acima de 30 dias" />
        <StatCard label="Pagas" value="R$ 214 mil" detail="Liquidação do ciclo" />
        <StatCard label="Previsão de recebimento" value="R$ 161 mil" detail="Próximos 15 dias" />
      </div>
      <LightTable
        title="Cobranças monitoradas"
        description="Visão por faixa de atraso"
        rows={charges}
        columns={[
          { header: "Aluno", render: (charge) => <span className="font-medium">{charge.student}</span> },
          { header: "Valor", render: (charge) => formatCurrency(charge.amount) },
          { header: "Status", render: (charge) => <Badge variant={charge.status === "paga" ? "success" : charge.status === "vencida" ? "danger" : "warning"}>{charge.status}</Badge> },
          { header: "Atraso", render: (charge) => `${charge.delayDays} dias` },
          { header: "Vencimento", render: (charge) => charge.dueDate },
        ]}
      />
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
