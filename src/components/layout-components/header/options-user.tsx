'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Bell, Settings } from "lucide-react"

export const OptionsUser = () => {
    return (
        <div className="flex items-center gap-2 py-1 px-2 lg:px-8 lg:py-1">
            {/* Iconos (notificaciones y configuración) */}
            <div className="flex items-center gap-2 text-muted-foreground">
                <Bell className="w-5 h-5  cursor-pointer hover:text-foreground transition-colors" />
                <Separator orientation="vertical" className="h-5" />
                <Settings className="w-5 h-5  cursor-pointer hover:text-foreground transition-colors" />
            </div>

            {/* Separador */}
            <Separator orientation="vertical" className="mx-1 sm:mx-0 h-6" />

            {/* Perfil de usuario */}
            <div className="flex items-center gap-3 ">
                <Avatar className="w-8 h-8 sm:w-11 sm:h-11">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

    
                <div className="flex-col md:gap-1 text-right">
                    <p className="text-sm md:text-base font-semibold text-primary leading-none">
                        Chedo Nasevski
                    </p>
                    <p className="text-xs text-muted-foreground leading-none">Business</p>
                </div>
            </div>
        </div>
    )
}
