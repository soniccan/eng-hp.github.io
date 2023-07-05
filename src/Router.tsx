import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";

import { Page404 } from "./pages/Page404";
import { Home } from "./pages/home/Home";
import { Works } from "./pages/works/Works";
import { About } from "./pages/about/About";

export const Router = () => {
  return (
    <Routes>
      <Route path="/eng-hp.github.io/" element={<Layout />} >
        <Route index element={< Home/>} />

        <Route path="/eng-hp.github.io/works" element={<Works />} />
        <Route path="/eng-hp.github.io/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>

    </Routes>
  );
};
