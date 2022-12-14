import About from "../Home/About/About";
import Blogs from "../Home/Blogs/Blogs";
import Contact from "../Home/Contact/Contact";
import MySkills from "../Home/MySkills/MySkills";
import Projects from "../Home/Projects/Projects";
import ProjectsDetails from "../Home/ProjectsDetails/ProjectsDetails";
import ProjectsDetails1 from "../Home/ProjectsDetails/ProjectsDetails1";
import ProjectsDetails2 from "../Home/ProjectsDetails/ProjectsDetails2";

import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Home/Home/Home");

export const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
            
        },
        {
            path:'/projects',
            element:<Projects></Projects>
    
        },
        {
            path:'/projectsdetails',
            element:<ProjectsDetails></ProjectsDetails>
        },
        {
            path:'/projectsdetails1',
            element:<ProjectsDetails1></ProjectsDetails1>
        },
        {
            path:'/projectsdetails2',
            element:<ProjectsDetails2></ProjectsDetails2>
        },
        {
            path:'/myskills',
            element:<MySkills></MySkills>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }

    ]
   }
])

export default router