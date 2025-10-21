"use client"
import {  LogOut, Settings,  User2 } from "lucide-react"

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
import Image from "next/image";
import { useUserStore } from "@/store/user-store";
import {  itemsSidebar } from "@/const/sidebar-links";




export function AppSidebar() {
  const { determineLocation } = useLocation();
  const clearUser = useUserStore(state => state.clearUser)
  const handleLogout = () => {

    clearUser()
    console.log("Cerrando sesión...")
  }
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full">
        <SidebarGroup>
          <div>
            <Image
              src="/gym/gym.png"
              alt="Logo"
              className="rounded-full mx-auto"
              width={100}
              height={100}
            />
          </div>

          <SidebarGroupLabel className="mt-5">Menú</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {itemsSidebar.map((item) => {
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