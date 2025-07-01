import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-white text-black">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
