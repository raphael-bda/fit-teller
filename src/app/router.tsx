import { createBrowserRouter } from "react-router-dom";

import { AppShell } from "@/components/layout/app-shell";
import { ComercialPage } from "@/pages/comercial-page";
import { CommunicationPage } from "@/pages/communication-page";
import { ConfiguracoesPage } from "@/pages/configuracoes-page";
import { ConhecimentoPage } from "@/pages/conhecimento-page";
import { DashboardPage } from "@/pages/dashboard-page";
import { DiretoriaPage } from "@/pages/diretoria-page";
import { FinanceiroPage } from "@/pages/financeiro-page";
import { MarketingPage } from "@/pages/marketing-page";
import { PedagogicoPage } from "@/pages/pedagogico-page";
import { ReunioesPage } from "@/pages/reunioes-page";
import { SecretariaPage } from "@/pages/secretaria-page";
import { TasksPage } from "@/pages/tasks-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "comunicacao", element: <CommunicationPage /> },
      { path: "reunioes-ia", element: <ReunioesPage /> },
      { path: "tarefas", element: <TasksPage /> },
      { path: "comercial", element: <ComercialPage /> },
      { path: "secretaria", element: <SecretariaPage /> },
      { path: "financeiro", element: <FinanceiroPage /> },
      { path: "pedagogico", element: <PedagogicoPage /> },
      { path: "marketing", element: <MarketingPage /> },
      { path: "conhecimento", element: <ConhecimentoPage /> },
      { path: "diretoria", element: <DiretoriaPage /> },
      { path: "configuracoes", element: <ConfiguracoesPage /> },
    ],
  },
]);
