import { Header, Navbar } from "./components";
import { About, Contact, Home, Services, Works } from "./pages";

function App() {
  return (
    <div className="bg-none-repeat overflow-hidden bg-site bg-cover">
      <Header />
      <Home />
      <Navbar />
      <About />
      <Services />
      <Works />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
