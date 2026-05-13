import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type ComparisonColumn = {
  key: string
  label: string
  href?: string
}

export type ComparisonRow = {
  label: string
  values: Record<string, string>
}

type ComparisonTableProps = {
  title: string
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
}

export function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  return (
    <section className="border-y border-border bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
        </div>

        <div className="mx-auto hidden max-w-5xl overflow-hidden rounded-2xl border border-border bg-background md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[28%]">Critério</TableHead>
                {columns.map((column) => (
                  <TableHead key={column.key}>
                    {column.href ? (
                      <Link href={column.href} className="text-primary underline-offset-4 hover:underline">
                        {column.label}
                      </Link>
                    ) : (
                      column.label
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-medium text-foreground">{row.label}</TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.key} className="text-muted-foreground">
                      {row.values[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 md:hidden">
          {rows.map((row) => (
            <Card key={row.label} className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{row.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {columns.map((column) => (
                  <div key={column.key} className="flex items-start justify-between gap-4">
                    <span className="text-sm font-medium text-foreground">
                      {column.href ? (
                        <Link href={column.href} className="text-primary underline-offset-4 hover:underline">
                          {column.label}
                        </Link>
                      ) : (
                        column.label
                      )}
                    </span>
                    <span className="text-right text-sm text-muted-foreground">{row.values[column.key]}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
