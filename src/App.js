import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Loading from "./utils/Loading/Loading";
import Footer from "./Components/Footer/Footer";

import style from "./index.module.scss";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const WhoWeAre = React.lazy(() => import("./Pages/WhoWeAre/WhoWeAre"));
const WhatWeDo = React.lazy(() => import("./Pages/WhatWeDo/WhatWeDo"));

function App() {
  return (
    <div className={style.pageStyle}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/whoWeAre"
          element={
            <Suspense fallback={<Loading />}>
              <WhoWeAre />
            </Suspense>
          }
        />
        <Route
          path="/whatWeDO"
          element={
            <Suspense fallback={<Loading />}>
              <WhatWeDo />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
