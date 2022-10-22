import logo from './logo.svg';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, useNavigate, NavLink, BrowserRouter,
} from "react-router-dom";
import './App.css';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../src/css/common.css';
import Loader from './page/Loader';
import SingleBlog from './page/SingleBlog';
import { Footer, Navbar } from './page/Layout';


// Router Doc Link https://reactrouter.com/en/main/start/overview
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <><h2>Welcome React Blog</h2></> },
    { path: "/home", element: <>
      <Navbar title="Welcome Blogs"/>
      <Home />
      <Footer />
    </> },

    {path:'/blog/:id', element: <>
      <Navbar title="Single Blog"/>
      <SingleBlog />
      <Footer />
    </>}
]);

return (<>
<Loader start={false} />
<RouterProvider router={router} />
</>
)
}

export default App;
