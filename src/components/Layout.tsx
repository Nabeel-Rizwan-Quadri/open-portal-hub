import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {
        !location.pathname.includes("contact") && < CallToAction />
      }
      <Footer />
    </div>
  );
};

export default Layout;