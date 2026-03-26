import type { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Column<T> = {
  header: string;
  render: (row: T) => ReactNode;
};

export function LightTable<T>({
  title,
  description,
  rows,
  columns,
}: {
  title: string;
  description: string;
  rows: T[];
  columns: Column<T>[];
}) {
  return (
    <Card className="border-white/60 bg-white/90">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                {columns.map((column) => (
                  <th key={column.header} className="px-3 py-3 font-medium">
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border/60 last:border-0">
                  {columns.map((column) => (
                    <td key={column.header} className="px-3 py-3 align-top">
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
