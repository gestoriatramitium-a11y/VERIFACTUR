import Hero from "../components/Hero";
import DiagnosticQuiz from "../components/DiagnosticQuiz";
import Comparator from "../components/Comparator";
import LeadMagnet from "../components/LeadMagnet";
import SeoSections from "../components/SeoSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DiagnosticQuiz />
      <Comparator compact />
      <LeadMagnet />
      <SeoSections />
    </>
  );
}
