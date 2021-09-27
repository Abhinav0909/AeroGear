import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/LandingPage/index'
import Navbar from "../components/navbar";
import Chatroom from "../pages/Chatroom/Chatroom";
import Aircrafts from "../pages/Aircrafts/Aircrafts";
import grobG115 from "../pages/grobG115/grobG115";
const Main = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/aircraft" exact component={Aircrafts} />
                <Route path ='/aircraft/jet1' exact component ={grobG115}/>
                <Route path ='/chat' exact component={Chatroom} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main;
