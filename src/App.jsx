import { Route, Routes } from "react-router-dom";

import { Header, Navbar } from "./components";
import { About, Contact, Home, Works } from "./pages";

function App() {
  return (
    <div className="bg-none-repeat overflow-hidden bg-site bg-cover">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/works" element={<Works />} />
        {/* <Contact /> */}
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
