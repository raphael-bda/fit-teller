import { cn } from "@/lib/utils";
import { users } from "@/data/mock-data";

export function AvatarGroup({ userIds, max = 4 }: { userIds: string[]; max?: number }) {
  const resolved = userIds
    .map((id) => users.find((user) => user.id === id))
    .filter(Boolean)
    .slice(0, max);

  const overflow = userIds.length - resolved.length;

  return (
    <div className="flex items-center">
      {resolved.map((user, index) => (
        <div
          key={user?.id}
          className={cn(
            "-ml-2 flex size-9 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-xs font-bold text-primary first:ml-0",
            index === 0 && "ml-0",
          )}
          title={user?.name}
        >
          {user?.avatar}
        </div>
      ))}
      {overflow > 0 ? (
        <div className="-ml-2 flex size-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground">
          +{overflow}
        </div>
      ) : null}
    </div>
  );
}
