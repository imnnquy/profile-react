import React from 'react';
import Home from './Home'
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

export default class BodyUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </div>;
  }
}
