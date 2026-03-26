import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { KPI } from "@/types/entities";
import { cn } from "@/lib/utils";

export function KpiCard({ item, index = 0 }: { item: KPI; index?: number }) {
  const Icon =
    item.tone === "positive" ? ArrowUpRight : item.tone === "warning" ? ArrowDownRight : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      <Card className="border-white/60 bg-white/90">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
            <div
              className={cn(
                "rounded-full p-2",
                item.tone === "positive" && "bg-emerald-50 text-emerald-600",
                item.tone === "warning" && "bg-amber-50 text-amber-600",
                item.tone === "neutral" && "bg-slate-100 text-slate-500",
              )}
            >
              <Icon className="size-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="font-display text-3xl font-bold text-foreground">{item.value}</p>
            <p className="text-sm text-muted-foreground">{item.trend}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
