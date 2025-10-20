import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import Category from "../pages/Category";

const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: HomeLayouts,
            children:[
                {
                    path:"",
                    Component:Home
                },
                {
                    path:"/category/:id",
                    Component:Category,  
                    loader: ()=> fetch("/news.json")
                }
            ]
        },
        {
            path:"/auth",
            element: <h2>Authentication pages</h2>
        },
        {
            path:"/news",
            element:<h2>News pages</h2>
        },
        {
            path: "/*",
            element: <h2>Error 404</h2>
        }
    ]
)
export default router;