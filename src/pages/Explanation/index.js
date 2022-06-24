import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

const Explanation = () => {
    return (
        <>
            <h4 className={styles.card}>
                Sorry, as this project was part of 24h challenge using React and
                Redux, the navbav is there to just imitate Github's version of
                navbar but lacking functionality.{' '}
                <p>
                    Click{' '}
                    <Link to="/" aria-label="back to home page">
                        here
                    </Link>{' '}
                    to go back to the home page or use the logo in the navbar.
                </p>
            </h4>
        </>
    );
};

export default Explanation;
