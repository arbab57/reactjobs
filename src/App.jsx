import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import Mainlayout from "./layouts/mainlayout";
import Jobspage from "./pages/jobspage";
import Notfound from "./pages/notfound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/jobs" element={<Jobspage />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
