import  React from "react";
import  ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-white text-black">
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
    </div>
  </React.StrictMode>
);
