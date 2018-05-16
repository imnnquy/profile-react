import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="images/profile.png" alt=""/>
                    <div className="intro-text">
                        <span className="name">Quy N. Nguyen</span>
                        <hr className="star-light"/>
                        <span className="skills">Web Developer - Mobile Developer - Freelancer</span>
                    </div>
                </div>
            </div>
        </div>
    </header>);
  }
}
