// modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// children
import Layout from "./widgets/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// styles
import "./shared/styles/App.scss";
import SavedList from "./components/HomeComponents/SavedList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/favourities" element={<SavedList />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
