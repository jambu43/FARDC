"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type SortingState,
  getSortedRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

// Simulons des données de donateurs pour cet exemple
const getCampaignDonors = (id: string) => [
  { id: id, name: "Alice Dubois", email: "alice@example.com", amount: 100, date: "2023-06-10" },
  { id: id, name: "Thomas Martin", email: "thomas@example.com", amount: 250, date: "2023-06-09" },
  { id: id, name: "Sophie Lefebvre", email: "sophie@example.com", amount: 50, date: "2023-06-08" },
  { id: id, name: "Lucas Bernard", email: "lucas@example.com", amount: 500, date: "2023-06-07" },
  { id: id, name: "Emma Petit", email: "emma@example.com", amount: 75, date: "2023-06-06" },
]

type Donor = {
  id: string
  name: string
  email: string
  amount: number
  date: string
}

const columns: ColumnDef<Donor>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Montant",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return new Date(row.getValue("date")).toLocaleDateString("fr-FR")
    },
  },
]

export function CampaignDonors({ campaignId }: { campaignId: string }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const donors = getCampaignDonors(campaignId)

  const table = useReactTable({
    data: donors,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donateurs de la campagne</CardTitle>
        <CardDescription>Liste de tous les donateurs ayant contribué à cette campagne.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center py-4">
          <Input
            placeholder="Filtrer par nom..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Aucun donateur trouvé.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

