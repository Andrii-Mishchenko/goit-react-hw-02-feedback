import React from 'react';
import PropTypes from 'prop-types'
import styles from'../Feedback.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul className={styles.statistics}>
        <li><span className={styles.data}>Neutral: </span>{neutral}</li>
        <li><span className={styles.data}>Bad: </span>{bad}</li>
        <li><span className={styles.data}>Total: </span>{total}</li>
        <li><span className={styles.data}>Good: </span>{good}</li>
        <li><span className={styles.data}>Positive feedback: </span>{positivePercentage}%</li>
    </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
 
}
    
export default Statistics;