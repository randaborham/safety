import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About_us/About_us";
import ServicePage from "./Components/Services/ServicePage/ServicePage";
import OurClients from "./Components/Clients/ClientPage/ourClient";
import News from "./Components/News/News";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Certificate from "./Components/Certificate/Certificate";
import Contactus from "./Components/contact_us/Contactus";
import Career from "./Components/career/Career";
import Goals from "./Components/Services/goals/Goals";


 let router= createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {path:'/',element:<Home/>},
    {path:'/about_us',element:<AboutUs/>},
    {path:'/Services',element:<ServicePage/>},
    {path:'/clients',element:<OurClients/>},
    {path:'/goals',element:<Goals/>},
    {path:'/news',element:<News/>},
    {path:'/ServiceDetails/:id',element:<ServiceDetails/>},
    {path:'/contact',element:<Contactus/>},
    {path:'/career',element:<Career/>},
    {path:'/advanced_search',element:<Certificate/>},
    ]}
 ])
function App() {
  return <>
    <RouterProvider router={router} />
    </>;
}

export default App;
