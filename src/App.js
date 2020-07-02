import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Footer category={category} />
    </>
    )
}


export default App;
