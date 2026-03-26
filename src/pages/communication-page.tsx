import { useMemo, useState } from "react";
import { Paperclip, Pin, Search, SendHorizonal } from "lucide-react";

import { AvatarGroup } from "@/components/shared/avatar-group";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { channels, messages, users } from "@/data/mock-data";

export function CommunicationPage() {
  const [activeChannelId, setActiveChannelId] = useState("c1");
  const [search, setSearch] = useState("");
  const activeChannel = channels.find((channel) => channel.id === activeChannelId) ?? channels[0];
  const filteredMessages = useMemo(
    () =>
      messages.filter(
        (message) =>
          message.channelId === activeChannel.id &&
          message.content.toLowerCase().includes(search.toLowerCase()),
      ),
    [activeChannel.id, search],
  );
  const pinnedMessages = filteredMessages.filter((message) => message.pinned);
  const onlineUsers = users.filter((user) => user.status === "online");

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Comunicação" title="Fluxo institucional por canais" description="Experiência inspirada em hubs de comunicação, adaptada para alinhamento operacional entre setores do IEFE." badge="7 canais ativos" />
      <div className="grid gap-6 xl:grid-cols-[280px,1fr,300px]">
        <Card className="border-white/60 bg-white/90">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-border/70 bg-background px-3 py-2">
              <Search className="size-4 text-muted-foreground" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Buscar no histórico" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div className="space-y-2">
              {channels.map((channel) => (
                <button key={channel.id} type="button" onClick={() => setActiveChannelId(channel.id)} className={`w-full rounded-xl border px-4 py-3 text-left transition-all ${activeChannel.id === channel.id ? "border-primary bg-primary/10" : "border-border/60 bg-background hover:border-primary/40"}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">#{channel.name}</span>
                    <span className="text-xs text-muted-foreground">{channel.pinnedCount}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{channel.topic}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/60 bg-white/90">
          <CardContent className="flex h-full flex-col p-0">
            <div className="border-b border-border/70 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-semibold">#{activeChannel.name}</h2>
                  <p className="text-sm text-muted-foreground">{activeChannel.topic}</p>
                </div>
                <AvatarGroup userIds={onlineUsers.slice(0, 5).map((user) => user.id)} />
              </div>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {filteredMessages.map((message) => {
                const author = users.find((user) => user.id === message.authorId);
                return (
                  <div key={message.id} className="flex gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{author?.avatar}</div>
                    <div className="min-w-0 flex-1 rounded-2xl border border-border/70 bg-background p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-medium">{author?.name}</span>
                        <span className="text-xs text-muted-foreground">{message.sentAt}</span>
                        {message.pinned ? <span className="inline-flex items-center gap-1 text-xs text-primary"><Pin className="size-3" />fixada</span> : null}
                      </div>
                      <p className="text-sm leading-6 text-foreground">{message.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-border/70 px-5 py-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-3">
                <Button variant="ghost" size="icon"><Paperclip className="size-4" /></Button>
                <Input className="border-0 bg-transparent shadow-none focus-visible:ring-0" placeholder="Escrever mensagem institucional..." />
                <Button size="icon"><SendHorizonal className="size-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="border-white/60 bg-white/90">
            <CardContent className="space-y-4 p-5">
              <h3 className="font-display text-lg font-semibold">Mensagens fixadas</h3>
              {pinnedMessages.map((message) => (
                <div key={message.id} className="rounded-xl border border-border/70 bg-background p-4">
                  <p className="text-sm text-foreground">{message.content}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{message.sentAt}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-white/60 bg-white/90">
            <CardContent className="space-y-4 p-5">
              <h3 className="font-display text-lg font-semibold">Pessoas online</h3>
              {onlineUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{user.avatar}</div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
