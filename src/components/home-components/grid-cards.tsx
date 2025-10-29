import { ShoppingCart, Users } from "lucide-react"
import { CardHome } from "./card-home"
import { LayoutHome } from "../layout-components/home/layout-home"

export const GridCards = () => {
    return (
        <LayoutHome >
            <CardHome title='Ganancias de Hoy' percentage={17} profit={70000} />
            <CardHome title='Nuevos Socios Hoy' percentage={23} profit={50000} icon={Users} />
            <CardHome title='Ventas de Productos/Insumos' percentage={56} profit={90000} icon={ShoppingCart} />
        </LayoutHome>
    )
}
