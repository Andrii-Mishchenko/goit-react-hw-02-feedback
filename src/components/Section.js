import React from 'react';
import PropTypes from 'prop-types'
import styles from'./Feedback.module.css'



const Section =({title, children}) => 
    <div className = {styles.section}>
        <p className={styles.title}>{title}</p>
        {children}
    </div>

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section