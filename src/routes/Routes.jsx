import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import Registration from "../Components/Registration/Registration";
import Signin from "../Components/Signin/Signin";
import { createBrowserRouter, } from "react-router-dom";
import ServiceDetail from "../Components/ServiceDetail/ServiceDetail";
import Blogs from "../Components/Blogs/Blogs";
import Club from "../Components/Club/Club";
import PrivateRoute from "./PrivateRoute";
import BlogDetail from "../Components/BlogDetail/BlogDetail";
import NotFound from "../Components/NotFound/NotFound";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/service/:id',
                loader: () => fetch('/data.json'),
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/club',
                element: <PrivateRoute><Club></Club></PrivateRoute>
            },
            {
                path: '/blogs/:id',
                loader: () => fetch('/blog.json'),
                element: <PrivateRoute><BlogDetail></BlogDetail></PrivateRoute>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    },
]);

export default Routes