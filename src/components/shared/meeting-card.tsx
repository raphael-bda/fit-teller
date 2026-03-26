import { CalendarDays } from "lucide-react";

import { AvatarGroup } from "@/components/shared/avatar-group";
import { PriorityBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { Meeting } from "@/types/entities";

export function MeetingCard({
  meeting,
  isActive,
  onClick,
}: {
  meeting: Meeting;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className="w-full text-left" onClick={onClick} type="button">
      <Card className={isActive ? "border-primary shadow-panel" : "border-white/60 bg-white/90"}>
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <div>
              <CardTitle className="text-base">{meeting.title}</CardTitle>
              <CardDescription>{meeting.sector}</CardDescription>
            </div>
            <PriorityBadge value={meeting.priority} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{meeting.summary}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              {formatDate(meeting.date)}
            </div>
            <AvatarGroup userIds={meeting.participants} />
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
