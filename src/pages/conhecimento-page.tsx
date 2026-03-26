import { Search } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { knowledgeArticles } from "@/data/mock-data";

export function ConhecimentoPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Conhecimento" title="Base institucional para processos e decisão" description="Central de POPs, scripts, regras e documentos com busca semântica simulada e navegação por categorias." badge="Busca inteligente simulada" />
      <Card className="border-white/60 bg-white/90">
        <CardContent className="p-5">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/[0.06] px-4 py-4">
            <Search className="size-5 text-primary" />
            <div>
              <p className="font-medium">Busca semântica sugeriu: "renegociação com aluno em risco de evasão"</p>
              <p className="text-sm text-muted-foreground">Artigos correlatos: script financeiro, POP de matrícula e roteiro de reunião com IA.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        {knowledgeArticles.map((article) => (
          <Card key={article.id} className="border-white/60 bg-white/90">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-primary/80">
                <span>{article.category}</span>
                <span>{article.updatedAt}</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{article.summary}</p>
              <div className="rounded-xl bg-muted px-3 py-2 text-sm text-muted-foreground">Relevância: {article.relevance}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
