import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from './Pages/Admin'
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<h1>404 !! PAGE NOT FOUND</h1>,
        children:[
            {
                path:"/admin",
                element:<Admin></Admin>
            },
            {
                path:"/student",
                element:<Student/>
            },
            {
                path:"/teacher",
                element:<Teacher/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    }
])

export default router