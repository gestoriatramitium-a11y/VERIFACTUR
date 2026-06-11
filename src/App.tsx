import Header from "./components/Header";
import Hero from "./components/Hero";
import DiagnosticQuiz from "./components/DiagnosticQuiz";
import Comparator from "./components/Comparator";
import LeadMagnet from "./components/LeadMagnet";
import SeoSections from "./components/SeoSections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DiagnosticQuiz />
        <Comparator />
        <LeadMagnet />
        <SeoSections />
      </main>
      <Footer />
    </>
  );
}
