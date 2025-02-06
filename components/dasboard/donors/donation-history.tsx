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
} from "@tanstack/react-table"


type Donation = {
  id: number
  campaignName: string
  amount: number
  date: string
}


// Simulons des données de donation pour cet exemple
// const getDonationHistory = (id: number) => [
const getDonationHistory = () => [
  { id: 1, campaignName: "Aide aux sinistrés", amount: 100, date: "2023-06-10" },
  { id: 2, campaignName: "Équipement pour l'hôpital", amount: 250, date: "2023-05-15" },
  { id: 3, campaignName: "Rénovation de l'école", amount: 150, date: "2023-04-20" },
  { id: 4, campaignName: "Protection de la faune", amount: 200, date: "2023-03-05" },
  { id: 5, campaignName: "Aide alimentaire", amount: 75, date: "2023-02-18" },
]


const columns: ColumnDef<Donation>[] = [
  {
    accessorKey: "campaignName",
    header: "Campagne",
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

export default function DonationHistory({ donorId }: { donorId: string }) {
  const donations = getDonationHistory()
  const [sorting, setSorting] = React.useState<SortingState>([])
  console.log(donorId)

  const table = useReactTable({
    data: donations,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historique des donations</CardTitle>
        <CardDescription>Liste de toutes les donations effectuées par ce donateur.</CardDescription>
      </CardHeader>
      <CardContent>
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
                  Aucune donation trouvée.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

