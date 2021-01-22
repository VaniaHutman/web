import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import News from './News';
import Side_bar from './Side_bar';
import Adding from './Adding';
import History from './History';
import Contacts from './Contacts';


const App = (props) => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Route path="/" exact component={Side_bar} />
      <Route path="/" exact component={Content} />
      <Route path="/" exact component={News} />
      <Route path="/add" exact component={Adding} />
      <Route path="/history" exact component={History} />
      <Route path="/contacts" exact component={Contacts} />
      <Footer />
    </Router>
  );
}

export default App;