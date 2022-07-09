import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
///////////////////////////////////////
const Home = React.lazy(() => import("./Pages/Home"));

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
