"use client"
import {  ChartLine,  Home,  LogOut,  Settings, SquareChartGantt, User2, UserRoundCheck, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,


} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useLocation } from "@/hooks/use-loaction";


// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: Home,
  },
  {
    title: "Usuarios",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Asistencia",
    url: "/dashboard/attendance",
    icon: UserRoundCheck,
  },
  {
    title: "Estadisticas",
    url: "/dashboard/stats",
    icon: ChartLine,
  },
  {
    title: "Inventario",
    url: "/dashboard/inventary",
    icon: SquareChartGantt,
  },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },

]

export function AppSidebar() {
  const { determineLocation } = useLocation();
  const handleLogout = () => {
    // Aquí ponés tu lógica para cerrar sesión
    console.log("Cerrando sesión...")
  }
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full">
        <SidebarGroup>
          <div>
            <img
              src="/gym.png"
              alt="Logo"
              className="w-1/3 lg:w-1/2 rounded-full mx-auto"
            />
          </div>

          <SidebarGroupLabel className="mt-5">Menú</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {items.map((item) => {
                const isActive = determineLocation(item.url)

                return (
                  <Link key={item.title} href={item.url}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start gap-2 ${isActive
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-start w-full">{item.title}</span>
                    </Button>
                  </Link>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer abajo */}
        <SidebarFooter className="mt-auto flex flex-col gap-2 px-2">
          <Link href="/dashboard/profile">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User2 className="h-5 w-5" />
              Ver perfil
            </Button>
          </Link>

          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-5 w-5" />
              Configuración
            </Button>
          </Link>

          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start gap-2 text-red-500"
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Button>
        </SidebarFooter>

      </SidebarContent>
    </Sidebar>

  );
}