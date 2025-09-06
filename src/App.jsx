import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/AppShell";
import Home from "./pages/Home";
import CaseList from "./pages/CaseList";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Insights from "./pages/Insights";

export default function App() {
  const basename = import.meta.env.BASE_URL;
  return (
    <BrowserRouter basename={basename}>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case" element={<CaseList />} />
          <Route path="/case/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
