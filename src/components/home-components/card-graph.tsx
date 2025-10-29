"use client"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { CurveType } from "recharts/types/shape/Curve"
import { RenderChart } from './render-chart';
import { SeriesConfig } from "@/types/charts";



interface CardGraphProps {
    title: string
    description?: string
    data: any[]
    chartType?: "bar" | "line" // podemos expandir a más tipos
    series: SeriesConfig[]
    footer?: React.ReactNode
    className?: string
}

export const CardGraph = ({
    title,
    description,
    data,
    chartType = "bar",
    series,
    footer,
    className = "",
}: CardGraphProps) => {

    const chartConfig = series.reduce((acc, s) => {
        acc[s.dataKey] = { label: s.label, color: s.color }
        return acc
    }, {} as Record<string, { label: string; color: string }>)

    return (
        <Card className={`${className}`}>
            <CardHeader className="px-4 ">
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <RenderChart data={data} series={series} chartType={chartType} />
                </ChartContainer>
            </CardContent>
            {footer && <CardFooter className="flex-col px-4  items-start gap-2 text-sm">{footer}</CardFooter>}
        </Card>
    )
}
