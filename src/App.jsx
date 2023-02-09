import { Header, Navbar } from "./components";
import { About, Contact, Home, Works } from "./pages";

function App() {
  return (
    <div className="bg-none-repeat overflow-hidden bg-site bg-cover">
      <Header />
      <Home />
      <Navbar />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
