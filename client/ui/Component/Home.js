import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/profile.png" alt=""/>
                    <div class="intro-text">
                        <span class="name">Quy N. Nguyen</span>
                        <hr class="star-light"/>
                        <span class="skills">Web Developer - Mobile Developer - Freelancer</span>
                    </div>
                </div>
            </div>
        </div>
    </header>);
  }
}
