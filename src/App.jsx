import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
