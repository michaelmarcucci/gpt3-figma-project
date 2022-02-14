import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
    return (
        <div className="gpt3__features-container__feature" >
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div>
                {/* I changed all instances of -container_feature-text to -container__feature-text using double underscore */}
                <div className="gpt3__features-container__feature-text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
