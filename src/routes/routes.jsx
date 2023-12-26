import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRoutes from "./privateRouter";

const router = createBrowserRouter([...publicRouter, ...privateRoutes]);

export default router;
