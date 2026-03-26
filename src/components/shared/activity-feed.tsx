import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { activities, users } from "@/data/mock-data";

export function ActivityFeed() {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardHeader>
        <CardTitle>Atividade recente</CardTitle>
        <CardDescription>Movimentações relevantes nas últimas horas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const user = users.find((item) => item.id === activity.actorId);
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {user?.avatar}
              </div>
              <div className="space-y-1">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{user?.name}</span> {activity.action}{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
