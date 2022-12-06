import Brands from "./components/brands/Brands";
import CallTo from "./components/CTA/CallTo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import QA from "./components/Q&A/QA";

export default function App() {
  return (
    <>
      <Hero />
      <Brands />
      <CallTo />
      <QA />
    </>
  );
}
