"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"



type DonationChartProps = {
  data: {
    name: string
    total: number
  }[]
}



export function DonationChart({data}:DonationChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `${value}${value > 1000 ? "k" : ""}$`}
        />
        <Bar dataKey="total" fill="rgb(18 143 210)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

