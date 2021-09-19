import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/Header'
import Meals from './components/Meals'

function App() {
  return (
    <Router>
      <Header/>
      <Meals/>
      <div style = {{bottom : "0px", position : "absolute", margin : "4000px"}}>
        fyvgh
        </div>
    </Router>
  );
}

export default App;
