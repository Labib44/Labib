import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AllProjects from "../../pages/AllProjects/AllProjects";
import ProjectDetails from "../../pages/ProjectDetails/ProjectDetails";

const routers=createBrowserRouter([
    {
        path:"/", element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/", element:<Home></Home>
            },
            {
                path:"/allProducts", element:<AllProjects></AllProjects>
            },
            {
                path:"/details", element:<ProjectDetails></ProjectDetails>
            },
        ]
    }
])

export default routers;