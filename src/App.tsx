import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Telemetry from "./pages/Telemetry";
import Partners from "./pages/Partners";
import PricingDetails from "./pages/PricingDetails";
import UseCases from "./pages/UseCases";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/details/:id" element={<PricingDetails />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/telemetry" element={<Telemetry />} />
            <Route path="/partners" element={<Partners />} />

            <Route path="/usecases" element={<UseCases />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;