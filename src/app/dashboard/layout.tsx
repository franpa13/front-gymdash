import { Footer } from "@/components/layout-components/footer/footer";
import { AppSidebar } from "@/components/layout-components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function LayoutDashboard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <main>
                <SidebarTrigger className="xl:hidden" />
                {children}
                {/* <Footer /> */}
            </main>
        </SidebarProvider>

    )
}