import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { SecondPage } from "./pages/SecondPage";
import { Main } from "./pages/Main";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes>
    </div>
  );
};
