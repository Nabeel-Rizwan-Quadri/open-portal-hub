import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Layout;