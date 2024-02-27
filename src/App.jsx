import HomePage from "./pages/HomePage.jsx";
import ReactGA from 'react-ga';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactGA.initialize('G-V8WGGBQ7FN');

function App() {
  return (
    <>
      <ToastContainer />
      <HomePage />
    </>
  )
}

export default App
