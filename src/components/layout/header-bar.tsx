import { Bell, Plus, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser, notifications } from "@/data/mock-data";
import { environmentBadge } from "@/app/navigation";
import { useUiStore } from "@/store/ui-store";

export function HeaderBar() {
  const query = useUiStore((state) => state.commandQuery);
  const setQuery = useUiStore((state) => state.setCommandQuery);
  const EnvironmentIcon = environmentBadge.icon;

  return (
    <header className="sticky top-0 z-20 flex flex-col gap-4 border-b border-border/70 bg-background/80 px-6 py-4 backdrop-blur xl:flex-row xl:items-center xl:justify-between">
      <div className="relative w-full max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="h-11 rounded-xl border-white/60 bg-white pl-10"
          placeholder="Buscar tarefas, protocolos, reuniões ou artigos"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-white px-3 py-2 text-sm text-muted-foreground shadow-soft">
          <EnvironmentIcon className="size-4 text-primary" />
          <span className="font-medium text-foreground">{environmentBadge.label}</span>
        </div>
        <Button variant="outline" size="sm" className="gap-2 rounded-xl bg-white">
          <Plus className="size-4" />
          Ação rápida
        </Button>
        <button className="relative rounded-xl border border-border/70 bg-white p-2.5 shadow-soft" type="button">
          <Bell className="size-4 text-foreground" />
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {notifications.length}
          </span>
        </button>
        <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-white px-3 py-2 shadow-soft">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {currentUser.avatar}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.role}</p>
          </div>
          <Sparkles className="size-4 text-primary" />
        </div>
      </div>
    </header>
  );
}
