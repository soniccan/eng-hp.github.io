import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";

import { Page404 } from "./pages/Page404";
import { Home } from "./pages/home/Home";
import { Works } from "./pages/works/Works";
import { About } from "./pages/about/About";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={< Home/>} />

        <Route path="works" element={<Works />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>

    </Routes>
  );
};
