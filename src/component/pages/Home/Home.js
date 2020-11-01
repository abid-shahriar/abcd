import React, {Component, Fragment} from 'react';
import Header from './../Header/Header';
import OurStudentWorksAt from './../OurStudentsWorksAt/OurStudensWorksAt';
import OurCurriculam from './../OurCurriculam/OurCurriculam';
import CreativeCoaching from './../CreativeCoaching/CreativeCoaching';
import AskUsAnything from './../AskUsAnything/AskUSAnything';
import QuoteFromStudents from './../QuoteFromStudents/QuoteFromStudents';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Fragment>
          <title>Home</title>
          <Header/>
          <OurStudentWorksAt/>
          <OurCurriculam/>
          <CreativeCoaching/>
          <AskUsAnything/>
          <QuoteFromStudents/>  
          

      </Fragment>
    )
  }
}

export default Home
