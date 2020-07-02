import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

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
      <Main />
      <Footer category={category} />
    </>
    )
}


export default App;
