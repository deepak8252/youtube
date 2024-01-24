import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import appstore from "../src/util/appstore";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './component/Maincontainer';
import Watchpage from './component/Watchpage';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Maincontainer/>
      },
      {
        path:'/watchpage',
        element:<Watchpage/>
      }
    ]
  }
])
function App() {
  return (
    <>
   <Provider store={appstore}>
   <Head/>
   <RouterProvider router={appRouter}/>
    {/* <Body/> */}
   </Provider>
    </>
  );
}

export default App;
