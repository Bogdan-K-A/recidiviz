import { Category } from "./components/Category/Category.jsx";
import { Layout } from "./components/common/Layout/Layout.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Human } from "./components/Human/Human.jsx";
import { Information } from "./components/Information/Information.jsx";
import { Partners } from "./components/Partners/Partners.jsx";
import { Press } from "./components/Press/Press.jsx";
import { WeWork } from "./components/WeWork/WeWork.jsx";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Category />
        <Human />
        <Partners />
        <Information />
        <Press />
        <WeWork />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
