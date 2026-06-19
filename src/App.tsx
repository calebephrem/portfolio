import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Contributions from "./components/Contributions";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Stack from "./components/Stack";
import ExternalRedirect from "./ExternalRedirect";

function Home() {
  return (
    <div className="relative bg-off-white text-near-black w-full overflow-x-hidden">
      <Navbar />
      <ScrollProgress />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Contributions />
        <Projects />
        <Stack />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/github"
        element={<ExternalRedirect to="https://github.com/calebephrem" />}
      />
      <Route
        path="/twitter"
        element={<ExternalRedirect to="https://x.com/calebephrem" />}
      />
      <Route
        path="/discord"
        element={<ExternalRedirect to="https://discord.com/users/1411006542916091975" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
