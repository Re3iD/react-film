import Home from "./Routes/Home/Home.js";
import {HashRouter,Route,Redirect } from 'react-router-dom'
import About from "./Routes/About/About.js";
import NavBar from "./components/NavBar/NavBar.js";
import MoviePage from "./pages/MoviePage/MoviePage.js"
import ErrorPage from "./pages/404/ErrorPage.js"
const App = ()=>{
  return(
    
    <HashRouter>
    <NavBar/>
    <section>
      <Route path='/' exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-details" component={MoviePage}>
      </Route>
      <Route path="/404" component={ErrorPage}></Route>
      
      </section>
    </HashRouter>
    




      
  )
}

/* <BrowserRouter>
      <Routes>
      <Route exact path="/about" component={<About/>}/>
      <Route exact path="/" component={<Home/>}/>
      </Routes>
      </BrowserRouter> */
export default App;
