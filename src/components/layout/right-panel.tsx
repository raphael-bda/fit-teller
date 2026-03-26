import { useLocation } from "react-router-dom";

import { useRightPanel } from "@/hooks/use-right-panel";

export function RightPanel() {
  const location = useLocation();
  const panel = useRightPanel(location.pathname);

  return (
    <aside className="hidden w-[320px] shrink-0 border-l border-border/70 bg-white/70 px-5 py-6 2xl:block">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Painel contextual</p>
        <h2 className="mt-2 font-display text-xl font-semibold">{panel.title}</h2>
      </div>

      <div className="space-y-4">
        {panel.sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-border/70 bg-background p-4 shadow-soft">
            <h3 className="mb-3 text-sm font-semibold text-foreground">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div key={item} className="rounded-xl bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
