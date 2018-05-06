import React from 'react';
import Footer from './Common/Footer';
import Header from './Common/Header';
import BodyUI from './Component/BodyUI';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <BodyUI />
        <Footer />
      </div>);
  }
}
