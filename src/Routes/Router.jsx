import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Login from "../pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../component/PrivateRoute";
import Loading from "../pages/Loading";

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
                    loader: ()=> fetch("/news.json"),
                    hydrateFallbackElement: <Loading></Loading>
                }
            ]
        },
        {
            path:"/auth",
            Component: AuthLayout,
            children:[
                {
                    path: "/auth/login",
                    Component: Login,
                },
                {
                    path: "/auth/register",
                    Component: Register,
                }
            ]
        },
        {
            path:"/news-details/:id",
            element: (<PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>),
            loader: ()=>fetch('/news.json'),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: "/*",
            element: <h2>Error 404</h2>
        }
    ]
)
export default router;