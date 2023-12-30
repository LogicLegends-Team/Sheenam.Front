import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutePaths from "./routes";
import RootLayout from "./layouts/RootLayout";
// Pages
import Home from "./pages/Home";
import List from "./pages/List";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePaths.HOME} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={RoutePaths.LIST} element={<List />} />
      <Route path={RoutePaths.ABOUT_US} element={<AboutUs />} />
      <Route path={RoutePaths.SUPPORT} element={<Support />} />
      <Route path={RoutePaths.HOW_IT_WORKS} element={<HowItWorks />} />
      <Route path={RoutePaths.GET_STARTED} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
