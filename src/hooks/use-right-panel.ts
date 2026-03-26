import { channels, meetings, notifications, tasks, users } from "@/data/mock-data";
import { navigation } from "@/app/navigation";

export function useRightPanel(pathname: string) {
  const nextMeetings = meetings.slice(0, 2);
  const criticalTasks = tasks.filter((task) => task.priority === "critica" || task.priority === "alta").slice(0, 3);
  const onlineUsers = users.filter((user) => user.status === "online");

  const page = navigation.find((item) => item.path === pathname);

  return {
    title: page?.label ?? "Contexto operacional",
    sections: [
      {
        title: "Alertas importantes",
        items: notifications.map((item) => `${item.title} • ${item.time}`),
      },
      {
        title: "Reuniões do dia",
        items: nextMeetings.map((item) => `${item.title} • ${new Date(item.date).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`),
      },
      {
        title: "Pendências críticas",
        items: criticalTasks.map((item) => item.title),
      },
      {
        title: "Usuários online",
        items: onlineUsers.map((item) => `${item.name} • ${item.role}`),
      },
      {
        title: "Canais monitorados",
        items: channels.slice(0, 4).map((channel) => `#${channel.name} • ${channel.pinnedCount} fixadas`),
      },
    ],
  };
}
