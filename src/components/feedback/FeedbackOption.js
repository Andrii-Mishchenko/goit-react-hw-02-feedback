import React from 'react';
import PropTypes from 'prop-types'
import styles from'../Feedback.module.css'


const FeedbackOption = ({onIncreventGood, onIncreventNeutral, onIncreventBad}) => (
  
    <div className="feedback-options">
        <button type="button" className={styles.good} onClick = {onIncreventGood}>Good</button>
        <button type="button" className={styles.neutral} onClick = {onIncreventNeutral}>Neutral</button>
        <button type="button" className={styles.bad} onClick = { onIncreventBad}>Bad</button>
    </div> 
)

FeedbackOption.propTypes = {
    onIncreventGood: PropTypes.func.isRequired,
    onIncreventNeutral: PropTypes.func.isRequired,
    onIncreventBad: PropTypes.func.isRequired,
  
}


export default FeedbackOption;