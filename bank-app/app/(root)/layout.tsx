/* eslint-disable @typescript-eslint/no-unused-vars */

import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const loggedIn = {
      firstName: 'Samuel',
      lastName: 'Mensah',
  }
  return (
    <main className="h-screen w-full flex font-inter">
        <SideBar user={loggedIn} />
        {children}
    </main>
  );
}
