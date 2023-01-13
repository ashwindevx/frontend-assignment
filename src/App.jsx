import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Slogan />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
