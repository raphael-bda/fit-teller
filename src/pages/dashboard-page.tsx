import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { ActivityFeed } from "@/components/shared/activity-feed";
import { AlertBlock } from "@/components/shared/alert-block";
import { AnnouncementBlock } from "@/components/shared/announcement-block";
import { ChartCard } from "@/components/shared/chart-card";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardKpis, monthlyPerformance, sectorSnapshots } from "@/data/mock-data";
import { formatCompactNumber, formatCurrency } from "@/lib/utils";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Visão geral"
        title="Controle institucional em um único painel"
        description="Leitura executiva da operação do IEFE com foco em captação, receita, pendências críticas e ritmo por setor."
        badge="Atualizado às 10:42"
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dashboardKpis.map((item, index) => (
          <KpiCard key={item.id} item={item} index={index} />
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.45fr,1fr]">
        <ChartCard title="Evolução mensal" description="Ritmo conjunto de matrículas e receita para leitura de tendência" action={<Badge variant="outline">Jan-Jun 2026</Badge>}>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d9e4dd" />
                <XAxis dataKey="month" stroke="#6b7d76" />
                <YAxis yAxisId="left" stroke="#6b7d76" tickFormatter={(value) => formatCompactNumber(value)} />
                <YAxis yAxisId="right" orientation="right" stroke="#6b7d76" />
                <Tooltip formatter={(value, name) => (name === "receita" && typeof value === "number" ? formatCurrency(value) : value)} />
                <Bar yAxisId="right" dataKey="matriculas" fill="#bfd9cf" radius={[10, 10, 0, 0]} />
                <Line yAxisId="left" type="monotone" dataKey="receita" stroke="#2e745b" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Meta vs. realizado" description="Comparativo executivo da receita consolidada">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d9e4dd" />
                <XAxis dataKey="month" stroke="#6b7d76" />
                <YAxis stroke="#6b7d76" tickFormatter={(value) => formatCompactNumber(value)} />
                <Tooltip formatter={(value) => (typeof value === "number" ? formatCurrency(value) : value)} />
                <Bar dataKey="meta" fill="#d6ddd9" radius={[10, 10, 0, 0]} />
                <Bar dataKey="realizado" fill="#2e745b" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr,0.9fr]">
        <AnnouncementBlock />
        <AlertBlock />
        <ActivityFeed />
      </section>
      <section>
        <Card className="border-white/60 bg-white/90">
          <CardHeader>
            <CardTitle>Resumo por setor</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {sectorSnapshots.map((snapshot) => (
              <div key={snapshot.sector} className="rounded-2xl border border-border/70 bg-background p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold capitalize">{snapshot.sector}</p>
                  <Badge variant={snapshot.status === "acelerando" ? "success" : snapshot.status === "atencao" ? "warning" : "outline"}>{snapshot.status}</Badge>
                </div>
                <p className="text-sm text-foreground">{snapshot.headline}</p>
                <p className="mt-2 text-sm text-muted-foreground">{snapshot.metric}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
