import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../pages/LandingPage/index'
import Navbar from "../components/navbar";
const Main = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main;
