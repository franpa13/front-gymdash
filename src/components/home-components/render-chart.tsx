import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ChartTooltipContent } from "../ui/chart"
import { SeriesConfig } from "@/types/charts"

interface RenderChartProps {
  data: any[]
  series: SeriesConfig[]
  chartType?: "bar" | "line"
}

export const RenderChart = ({ data, series, chartType = "bar" }: RenderChartProps) => {
  return (
    <ResponsiveContainer width="100%" >
      {chartType === "line" ? (
        <LineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
 
          <Tooltip content={<ChartTooltipContent indicator="dashed" />} />
          {series.map((s) => (
            <Line
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.label}
              stroke={s.color}
              type={s.type || "linear"}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      ) : (
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />

          <Tooltip content={<ChartTooltipContent indicator="dashed" />} />
          {series.map((s) => (
            <Bar
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.label}
              fill={s.color}
              radius={s.radius || 4}
            />
          ))}
        </BarChart>
      )}
    </ResponsiveContainer>
  )
}
