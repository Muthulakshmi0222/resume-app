import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../assets/logo.svg";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      let url = "/templates";
      this.props.history.push(url);
  }
  
  render() {
    return (
        <div>
     <div>
     <h1 className='Heading'>Logo Resume Builder</h1>
     <h3 className='SubHeading'>Design stunning resumes with Logo</h3>
     </div>
      <Navbar />
      <div className='combineditem'>
          <img className='image1' src='https://www.careertoolbelt.com/wp-content/uploads/2019/08/iStock-1160804712.jpg' alt='resumebuilder1'></img>
          <p className='content'>Give your resume a brilliant upgrade with a free photo resume template from our expertly-curated selection of ready-to-use designs. Personalize it with ease using our intuitive editor.</p>
      </div>
       <p className='buttonwords'>Build your own resume</p>
      <Button variant="contained" className='button' onClick={this.handleClick} >Here</Button>

      <p className='copyright'>@copyright</p>

    </div>
  )
}
}

export default withRouter(LandingPage);