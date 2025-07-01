import React from "react";

import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../../Components/Main/Main";
import Home from "../../Components/Home/Home/Home";
import Random from "../../Components/Random/Random/Random";
import About from "../../Components/About/About/About";
import Bookmark from "../../Components/Bookmark/Bookmark";


export const router = createBrowserRouter([
    {
        path: "/",
        // to do : error elemment add
        element: <Main/> ,
        children : [
             {
                path : "/",
                element : <Home/>
             },
             {
                path : "/random",
                element : <Random/>
             },
             {
                path : "/bookmark",
                element : <Bookmark/>
             },
             {
                path : "/about",
                element :<About/>
             }
        ]
    },
]);


