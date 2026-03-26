import { NavLink } from "react-router-dom";

import { navigation } from "@/app/navigation";
import { currentUser } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-5 py-6 text-sidebar-foreground lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground shadow-soft">
          <span className="font-display text-lg font-bold">IE</span>
        </div>
        <div>
          <p className="font-display text-lg font-semibold">IEFE System</p>
          <p className="text-sm text-sidebar-foreground/70">Sistema operacional institucional</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-soft"
                  : "text-sidebar-foreground/72 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
              )
            }
          >
            <item.icon className="size-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-sidebar-foreground/60">Perfil ativo</p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-white/10 font-semibold">
            {currentUser.avatar}
          </div>
          <div>
            <p className="font-medium">{currentUser.name}</p>
            <p className="text-sm text-sidebar-foreground/65">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
