import Layouts from "../components/Layouts/Layouts";
import User from "../pages/User/User";

const privateRoutes = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
];

export default privateRoutes;
