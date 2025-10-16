

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <section className="w-full  h-screen flex flex-col items-center p-5 xl:p-10 justify-center">


            {children}

        </section>

    );
}
