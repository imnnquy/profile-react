import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="success" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr className="star-light"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-2">
                    <p>{"Hello, I'm Quy Nguyen (you can call me Eric), I'm a software developer, currently I'm working at CSC Vietnam as Software Engineer and work as a freelancer."}</p>
                </div>
                <div className="col-lg-4">
                    <p>{"If you have any problem, feel free to contact me, grab a cup of coffee or beer and we can talk about the solution."}</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
