

import { createBrowserRouter } from "react-router-dom";


import ListUsersHome from "./src/pages/listusers/index"; 
import ListUsers from "./src/pages/listusers/ListUsers"; 

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListUsersHome />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }
]);

export default router;
