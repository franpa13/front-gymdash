'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/layout-components/footer/footer";
import { AppSidebar } from "@/components/layout-components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUserStore } from "@/store/user-store";
import { Loader } from "@/components/ui/loader";
import { LocationComponent } from '../../components/layout-components/location-component/location-component';
import { useLocation } from "@/hooks/use-loaction";
import { HeaderMobile } from '../../components/layout-components/header/header-mobile';


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

            <main className="w-full">
                <HeaderMobile />

                {/* Breadcrumbs automáticos */}
                <LocationComponent className="block md:hidden" items={breadcrumbItems} />
                {isClient && user ? (
                    <section className=" px-2 lg:px-8 
                    py-3 lg:pt-8">
                        {children}
                        <Footer />
                    </section>

                ) : (
                    <Loader />
                )}



            </main>
        </SidebarProvider>
    );
}