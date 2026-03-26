import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@/data/mock-data";

export function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Configurações" title="Preferências, perfil e evolução da plataforma" description="Camada inicial de configuração com áreas preparadas para permissões, integrações, notificações e personalização futura." badge="Base pronta para autenticação" />
      <div className="grid gap-6 xl:grid-cols-3">
        <ConfigCard title="Perfil" lines={[`Usuário: ${currentUser.name}`, `Cargo: ${currentUser.role}`, "Unidade: Operações centrais"]} />
        <ConfigCard title="Preferências visuais" lines={["Tema institucional claro", "Contraste executivo elevado", "Densidade otimizada para desktop"]} />
        <ConfigCard title="Notificações" lines={["Alertas críticos: ativos", "Resumo diário: 18h", "Comunicados institucionais: imediatos"]} />
        <ConfigCard title="Permissões mockadas" lines={["Acesso executivo a dashboards", "Gestão de tarefas por setor", "Leitura da base institucional"]} />
        <ConfigCard title="Integrações futuras" lines={["API acadêmica", "ERP financeiro", "Transcrição e sumarização IA"]} />
        <ConfigCard title="Roadmap técnico" lines={["Autenticação SSO", "Camada RBAC", "Assistente institucional contextual"]} />
      </div>
    </div>
  );
}

function ConfigCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {lines.map((line) => (
          <div key={line} className="rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground">{line}</div>
        ))}
      </CardContent>
    </Card>
  );
}
