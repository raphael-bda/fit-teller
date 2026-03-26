import { LightTable } from "@/components/shared/light-table";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { students } from "@/data/mock-data";

export function PedagogicoPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Pedagógico" title="Acompanhamento acadêmico e risco de evasão" description="Visão consolidada de alunos monitorados, pendências acadêmicas e alertas para atuação preventiva do time pedagógico." badge="14 alunos em acompanhamento" />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Alunos monitorados" value="14" detail="2 turmas prioritárias" />
        <StatCard label="Pendências acadêmicas" value="19" detail="Atividades e frequência" />
        <StatCard label="Turmas em atenção" value="2" detail="EJA 02 e Técnico ADM" />
        <StatCard label="Engajamento médio" value="81%" detail="Acima do piso institucional" />
      </div>
      <LightTable
        title="Visão de alunos"
        description="Fila pedagógica priorizada"
        rows={students}
        columns={[
          { header: "Aluno", render: (student) => <span className="font-medium">{student.name}</span> },
          { header: "Turma", render: (student) => student.class },
          { header: "Risco", render: (student) => <Badge variant={student.risk === "alto" ? "danger" : student.risk === "medio" ? "warning" : "success"}>{student.risk}</Badge> },
          { header: "Ponto de atenção", render: (student) => student.issue },
          { header: "Frequência", render: (student) => `${student.attendance}%` },
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
