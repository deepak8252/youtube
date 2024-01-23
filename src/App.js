import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import appstore from "../src/util/appstore"
function App() {
  return (
    <>
   <Provider store={appstore}>
   <Head/>
    <Body/>
   </Provider>
    </>
  );
}

export default App;
