import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import  {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
   
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/SignIn" element={<SignIn />} />
    </Routes>

       
  );
}

export default App;
