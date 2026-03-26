import { LightTable } from "@/components/shared/light-table";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { protocols } from "@/data/mock-data";

export function SecretariaPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Secretaria" title="Protocolos, prazos e status operacional" description="Leitura das solicitações acadêmicas em andamento, com atenção a SLA, pendências e prazo de resposta." badge="SLA em 89%" />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Protocolos abertos" value="23" detail="9 em análise prioritária" />
        <StatCard label="Dentro do SLA" value="89%" detail="Padrão institucional de 24h" />
        <StatCard label="Prazos críticos" value="5" detail="Precisam de resposta hoje" />
        <StatCard label="Solicitações concluídas" value="41" detail="Últimos 7 dias" />
      </div>
      <LightTable
        title="Solicitações recentes"
        description="Fila operacional da secretaria"
        rows={protocols}
        columns={[
          { header: "Aluno", render: (protocol) => <span className="font-medium">{protocol.student}</span> },
          { header: "Tipo", render: (protocol) => protocol.type },
          { header: "Status", render: (protocol) => <Badge variant={protocol.status === "concluido" ? "success" : protocol.status === "em analise" ? "warning" : "outline"}>{protocol.status}</Badge> },
          { header: "Prazo", render: (protocol) => protocol.deadline },
          { header: "Responsável", render: (protocol) => protocol.sectorOwner },
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
