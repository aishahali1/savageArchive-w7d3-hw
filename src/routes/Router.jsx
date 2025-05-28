import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CharacterList from '../pages/CharacterList';
import Character from '../pages/Character';
import Home from "../pages/Home";

function Layout(){
   return(
     <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
   )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {path: "/", element: <Home></Home>},
        {path: "/characterlist", element: <CharacterList></CharacterList>},
        {path: "/character/:id", element: <Character></Character>},
    ]
  },
]);

function Router() {
  return (
      <RouterProvider router={router} />
  )
}

export default Router