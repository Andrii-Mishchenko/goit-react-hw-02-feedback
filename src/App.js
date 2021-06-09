import React, {Component} from 'react';
import PropTypes from 'prop-types'

import FeedbackOption from './components/feedback'
import Statistics from './components/Statistics'
import Notification from './components/Statistics/Notification'
import Section from './components/Section'

import styles from'./components/Feedback.module.css'


class App extends Component {
  static defaultProps = {
      initialValue: 0,
  }

  static propTypes = {
    initialValue: PropTypes.number,
  }

  state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue
  }

  handleIncrementGood = () => {
    this.setState((prevState)=>({           
            good: prevState.good+1,        
    }))
  }

  handleIncrementNeutral = () => {
    this.setState((prevState)=>({           
            neutral: prevState.neutral+1,        
    }))
  }

  handleIncrementBad = () => {
    this.setState((prevState)=>({           
            bad: prevState.bad+1,        
    }))
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    if (this.state.good>0) {
        positiveFeedback = Math.round((this.state.good/this.countTotalFeedback())*100);
    }
    return positiveFeedback;
  }

  render() {
    const {good, neutral, bad} = this.state;
    
    return (
      <section className={styles.container}>
        <Section title="Please, leave feedback">
          <FeedbackOption 
            onIncreventGood={this.handleIncrementGood}
            onIncreventNeutral={this.handleIncrementNeutral}
            onIncreventBad={this.handleIncrementBad}
          // options={0} 
          // onLeaveFeedback={0}
          />
        </Section>
        
        <Section title="Statistics">        
          {this.countTotalFeedback()===0 
          ? 
            <Notification message="No feedback given"/>
          :        
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />        
          }
        </Section>
      </section>
    )
  }
};
export default App;
