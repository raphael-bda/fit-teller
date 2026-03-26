import { useState } from "react";
import { Sparkles } from "lucide-react";

import { AvatarGroup } from "@/components/shared/avatar-group";
import { MeetingCard } from "@/components/shared/meeting-card";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { meetings } from "@/data/mock-data";
import { formatDate } from "@/lib/utils";

export function ReunioesPage() {
  const [selectedMeetingId, setSelectedMeetingId] = useState(meetings[0]?.id);
  const selectedMeeting = meetings.find((meeting) => meeting.id === selectedMeetingId) ?? meetings[0];

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Reuniões IA" title="Decisões registradas com contexto e próxima ação" description="Central de reuniões com síntese assistida, responsáveis, decisões tomadas e rastreabilidade pronta para integrações futuras." badge="Resumo automatizado ativo" />
      <div className="flex justify-end">
        <Button className="rounded-xl">
          <Sparkles className="size-4" />
          Nova reunião
        </Button>
      </div>
      <div className="grid gap-6 xl:grid-cols-[420px,1fr]">
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} isActive={meeting.id === selectedMeeting.id} onClick={() => setSelectedMeetingId(meeting.id)} />
          ))}
        </div>
        <Card className="border-white/60 bg-white/90">
          <CardHeader className="border-b border-border/70">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <CardTitle className="font-display text-2xl">{selectedMeeting.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{selectedMeeting.sector} • {formatDate(selectedMeeting.date)}</p>
              </div>
              <AvatarGroup userIds={selectedMeeting.participants} />
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 p-6 xl:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.07] p-5">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Sparkles className="size-4" />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em]">Resumo automático</span>
                </div>
                <p className="text-sm leading-7 text-foreground">{selectedMeeting.summary}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-background p-5">
                  <h3 className="mb-3 font-semibold">Decisões tomadas</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {selectedMeeting.decisions.map((decision) => (
                      <li key={decision}>• {decision}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background p-5">
                  <h3 className="mb-3 font-semibold">Próximos passos</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {selectedMeeting.nextSteps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border/70 bg-background p-5">
                <h3 className="mb-3 font-semibold">Responsáveis</h3>
                <AvatarGroup userIds={selectedMeeting.owners} max={6} />
              </div>
              <div className="rounded-2xl border border-border/70 bg-background p-5">
                <h3 className="mb-3 font-semibold">Tags da reunião</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMeeting.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background p-5">
                <h3 className="mb-3 font-semibold">Leitura de IA</h3>
                <p className="text-sm text-muted-foreground">O padrão de linguagem indica reunião orientada à execução, com foco alto em receita, SLA e acompanhamento diário.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
