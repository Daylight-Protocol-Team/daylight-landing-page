import React, { Suspense } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
///////////////////////////////////////
const Home = React.lazy(() => import("./Pages/Home"));
//animation aos init
AOS.init();
const App = () => {
  return (
    <Suspense fallback={<>Loading... </>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
