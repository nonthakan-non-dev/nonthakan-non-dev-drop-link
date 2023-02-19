import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component
import Layout from "./components/Layout";

// boxicons
import "boxicons";

// page
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/*" element={<Page404 />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
