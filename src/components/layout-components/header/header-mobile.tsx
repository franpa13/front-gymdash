'use client';
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { OptionsUser } from './options-user';
import { LocationComponent } from "../location-component/location-component";
import { useLocation } from "@/hooks/use-loaction";

export const HeaderMobile = () => {
    const { generateBreadcrumbs } = useLocation();
    const breadcrumbItems = generateBreadcrumbs();
    return (
        <div className="w-full flex flex-col bg-[#fafafa] ">
            <div className="w-full flex justify-between items-center md:justify-end">
                <LocationComponent className="hidden md:flex w-full" items={breadcrumbItems} />
                <SidebarTrigger size={"icon-lg"} className="md:hidden text-primary font-bold mt-2" />
                <OptionsUser />
            </div>

            <Separator className="pt-0.5" />
        </div>
    )
}
