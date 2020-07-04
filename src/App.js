import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import VedioGallery from './components/VedioGallery';

const category = [
  'TECHNOLOGY',
  'IDEAS',
  'LEADERSHIP',
  'VIDEO',
  'NEWS',
  'FINANCE',
  'ENTERTAINMENT'
]
const App = () => {
  return (
    <>
      <Header category={category} />
      <Switch>>
        <Route  exact path="/">
          <Main/>
        </Route>
        <Route  path="/VIDEO">
          <VedioGallery />
          </Route>
      </Switch>
      <Footer category={category} />
    </>
    )
}


export default App;
