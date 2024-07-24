import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <div className="flex items-center gap-4">
          <UserMenu />
          <MobileSheet navItems={navItems} />
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t bg-muted py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 GPT-Engineer. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;