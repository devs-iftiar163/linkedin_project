import Layouts from "../components/Layouts/Layouts";
import Home from "../pages/Home/Home";

const publicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default publicRouter;
