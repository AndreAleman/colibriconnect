import HomePage from "./pages/HomePage.jsx";
import ReactGA from 'react-ga';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer />
      <HomePage />
    </>
  )
}

export default App
