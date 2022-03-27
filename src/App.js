import { Navbar, Footer } from "./frontend/components/index.js";
import { Router } from "./frontend/routes/Router.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
