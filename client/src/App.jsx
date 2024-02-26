import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DashboardPage,
  Secretaria,
  Itinerario,
  Motoristas,
  Rota
  
} from "./pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children:[
          {
            path:"secretaria",
            element:<Secretaria/>
          },
          {
            path:"motoristas",
            element:<Motoristas/>
          },
          {
            path:"rota",
            element:<Rota/>
          },
          {
            path:"itinerario",
            element:<Itinerario/>
          },
        ]
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
