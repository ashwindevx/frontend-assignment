import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-secondary">
      <p className="text-3xl galanoRegular">Free Slogan Maker</p>
      <p className="text-3xl galanoMedium">Free Slogan Maker</p>
      <p className="text-3xl galanoSemibold">Free Slogan Maker</p>
      <Header />
      <Slogan />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
