//import logo from "./logo.svg";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "./App.css";

import Landingpage from "./components/Landingpage/Landinpage";
import Loginpage from "./components/Loginpage/Loginpage";
import Signuppage from "./components/Signuppage/Signuppage";
import Shoppingcart from "./components/Shoppingcart/Shoppingcart";
import Productpage from "./components/Productpage/Productpage";
import Checkoutpage from "./components/Checkoutpage/Checkoutpage";
import Categorypage from "./components/Categorypage/Categorypage";
function App() {
  
  return (
    <div>
      
      <Router>
      
        <Routes>
          <Route path='/' Component={Landingpage}/>
          <Route path='/cart' Component={Shoppingcart} />
          <Route path='/login' Component={Loginpage} />
          <Route path='/register' Component={Signuppage} />
          <Route path='/product' Component={Productpage}/>
          <Route path='/category' Component={Categorypage}/>
          <Route path='/checkout' Component={Checkoutpage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
