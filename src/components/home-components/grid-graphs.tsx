import { TrendingUp } from "lucide-react"
import { CardGraph } from "./card-graph"
import { LayoutHome } from "../layout-components/home/layout-home"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "June", desktop: 237 },
    { month: "April", desktop: 400 },
    { month: "May", desktop: 300 },
    { month: "Jul", desktop: 217 },
    { month: "Aug", desktop: 246 },
    { month: "Sep", desktop: 312 },
    { month: "Oct", desktop: 258 },
    { month: "Nov", desktop: 345 },
    { month: "Dec", desktop: 270 },
]

export const GridGraphs = () => {
    return (
        <LayoutHome >

            <CardGraph

                title="Clientes del ultimo año"
                description="January - March 2024"
                data={chartData}
                chartType="bar"
                series={[
                    {
                        dataKey: "desktop", label: "Desktop", color: "#2ca016",
                        type: undefined
                    }
                ]}
                
                footer={
                    <div className="flex gap-2 leading-none font-medium">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                }
            />
        </LayoutHome>


    )
}
