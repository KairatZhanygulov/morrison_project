import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Popular from './comp/Popular'
import Form from './comp/Form';
import MovieList from './comp/MovieList';
import Search from './comp/Search';
import Upcoming from './comp/Upcoming';
import Movie from './Movie';


import './style.css';

function App() {
  return (
    <div calssName="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <Link to="/" className="logo">
              <img src="./popcorn.png"/>
            </Link>
            <div className="links">
              <div className="header-button">
                <span id="header-button"><Link to="/">Фильмы в кино</Link></span>
                <span id="header-button"><Link to="/up">Скоро выйдут</Link></span>
                <span id="header-button"><Link to="/popul">Популярные</Link></span>
              </div>              
            </div>
            <div className="search">
              <Form />
            </div>
          </header>
          <Switch>
            <Route path="/up">
              <Upcoming />
            </Route>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/popul">
              <Popular />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
          </Switch>
          <footer>
            created by чroma
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

