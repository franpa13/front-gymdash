'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/layout-components/footer/footer";
import { AppSidebar } from "@/components/layout-components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useUserStore } from "@/store/user-store";
import { Loader } from "@/components/ui/loader";
import { LocationComponent } from '../../components/layout-components/location-component/location-component';
import { useLocation } from "@/hooks/use-loaction";


export default function LayoutDashboard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const user = useUserStore((state) => state.user);
    const [isClient, setIsClient] = useState(false);
    const { generateBreadcrumbs } = useLocation();

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && !user) {
            router.push("/login");
        }
    }, [user, router, isClient]);

    // Generar breadcrumbs automaticamente
    const breadcrumbItems = generateBreadcrumbs();

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="p-5">
                <SidebarTrigger className="xl:hidden" />

                {/* Breadcrumbs automáticos */}

                <LocationComponent items={breadcrumbItems} />
    

                {isClient && user ? (
                    children
                ) : (
                    <Loader />
                )}
                {/* <Footer/> */}
            </main>
        </SidebarProvider>
    );
}