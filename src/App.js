import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component
import Layout from "./components/Layout";

// boxicons
import "boxicons";

// page
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Loading from "./pages/Loading";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  try {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      }
      setLoading(false);
    });
  } catch (error) {
    setLoading(false);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Layout>
        {!!userData ? (
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/*" element={<Page404 />}></Route>
          </Routes>
        ) : (
          <Routes>
            {console.log(userData)}
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/*" element={<Page404 />}></Route>
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default App;
