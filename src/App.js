import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import ListProducts from "./components/ListProducts/index";
import About from "./page/About/index";
import SideBar from "./components/sidebar/index";
import HomePage from "./page/HomePage/index"
import ProductPage from './page/ProductPage/index'
import MenuMobile from './components/MenuMobile/index'
import { Grid,Container,Fade } from "@material-ui/core";

import '../src/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import MobileNavigation from "./components/MobileNavigation/index.jsx";
import SelectedNavContextProvider from './context/SelectedNavContext'

function App() {
  return (
   
      <div className="container-fluid p-0">
        <Container maxWidth="lg" className="p-0">
        <Router className="justify-content-md-center">
        <Header />
        <SelectedNavContextProvider>
        <MenuMobile/>
        
        <Grid  container spacing={1} className="w-100 m-0" >
          <Grid  item lg={2} className="p-0 d-none d-md-block" >
            <SideBar />
          </Grid>
          <Grid  item  className="p-0  col-12 col-md-12 col-lg-10" >     
            <Switch lg={12} >
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/product" component={ListProducts} />
              <Route exact path="/product/:id" component={ProductPage} />           
            </Switch>         
          </Grid>
        </Grid>
      
        <MobileNavigation/>
        </SelectedNavContextProvider>
        </Router>
        </Container>
      </div>
    
  );
}

export default App;
