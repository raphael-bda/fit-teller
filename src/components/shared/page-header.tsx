import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function PageHeader({
  eyebrow,
  title,
  description,
  badge,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <motion.div
      className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{eyebrow}</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {badge ? <Badge className="self-start lg:self-auto">{badge}</Badge> : null}
    </motion.div>
  );
}
