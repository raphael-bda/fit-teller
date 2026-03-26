import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { announcements, users } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";

export function AnnouncementBlock() {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardHeader>
        <CardTitle>Comunicados institucionais</CardTitle>
        <CardDescription>Atualizações oficiais relevantes para a operação</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map((item) => {
          const author = users.find((user) => user.id === item.authorId);
          return (
            <div key={item.id} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary/80">{item.sector}</p>
                </div>
                <p className="text-xs text-muted-foreground">{formatDate(item.createdAt)}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">Publicado por {author?.name}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
