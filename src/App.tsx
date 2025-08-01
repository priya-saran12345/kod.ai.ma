import { Outlet } from "react-router-dom";
import { Footer } from "./components/website/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
