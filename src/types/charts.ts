import { CurveType } from "recharts/types/shape/Curve"

export interface SeriesConfig {
    dataKey: string
    label: string
    color: string
    radius?: number // opcional para barras
    type: CurveType | undefined// opcional para lineas
}