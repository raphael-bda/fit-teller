import { Outlet } from "react-router-dom";

import { HeaderBar } from "@/components/layout/header-bar";
import { RightPanel } from "@/components/layout/right-panel";
import { Sidebar } from "@/components/layout/sidebar";

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <HeaderBar />
          <div className="flex min-h-0 flex-1">
            <main className="min-w-0 flex-1 px-4 py-6 sm:px-6">
              <Outlet />
            </main>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
