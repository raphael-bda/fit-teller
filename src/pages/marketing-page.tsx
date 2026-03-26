import { LightTable } from "@/components/shared/light-table";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { campaigns } from "@/data/mock-data";

export function MarketingPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Marketing" title="Campanhas, canais e origem de conversão" description="Painel analítico das ações de captação com foco em leads gerados, eficiência por canal e desempenho consolidado." badge="CPL abaixo da meta" />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Leads gerados" value="1.240" detail="Ciclo de março" />
        <StatCard label="Conversão por origem" value="12,6%" detail="Google lidera o mix" />
        <StatCard label="Campanhas ativas" value="2" detail="1 em otimização" />
        <StatCard label="ROI médio" value="3,2x" detail="Acima da linha de corte" />
      </div>
      <LightTable
        title="Resumo analítico"
        description="Performance das campanhas atuais"
        rows={campaigns}
        columns={[
          { header: "Campanha", render: (campaign) => <span className="font-medium">{campaign.name}</span> },
          { header: "Canal", render: (campaign) => campaign.channel },
          { header: "Leads", render: (campaign) => campaign.leads },
          { header: "Conversões", render: (campaign) => campaign.conversions },
          { header: "ROI", render: (campaign) => `${campaign.roi}x` },
          { header: "Status", render: (campaign) => <Badge variant={campaign.status === "ativa" ? "success" : campaign.status === "otimizacao" ? "warning" : "outline"}>{campaign.status}</Badge> },
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
