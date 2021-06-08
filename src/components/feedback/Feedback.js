import React from 'react';


class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrementGood = () => {
        this.setState((prevState)=>({           
                good: prevState.good+1,        
        }))
    }

    handleIncremenNeutral = () => {
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
        return (
            <section className="feedback">
                <p className="feedback-title">Please, leave feedback</p>
                <div className="feedback-options">
                    <button type="button" className="feedback-options__good" onClick = {this.handleIncrementGood}>Good</button>
                    <button type="button" className="feedback-options__neutral" onClick = {this.handleIncremenNeutral}>Neutral</button>
                    <button type="button" className="feedback-options__bad" onClick = {this.handleIncrementBad}>Bad</button>
                </div>
        
                <p className="feedback-title">Statistics</p>
                <ul className="feedback-statistics">
                    <li className="feedback-statistics-data">Good: {this.state.good}</li>
                    <li className="feedback-statistics-data">Neutral: {this.state.neutral}</li>
                    <li className="feedback-statistics-data">Bad: {this.state.bad}</li>
                    <li className="feedback-statistics-data">Total: {this.countTotalFeedback()}</li>
                    <li className="feedback-statistics-data">Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </section>
        )
    }
}


export default Feedback;