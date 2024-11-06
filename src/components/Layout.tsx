import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;