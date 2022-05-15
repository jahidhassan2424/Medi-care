import React from 'react';

const PrimaryButton = ({ children, type }) => {
    return (
        <div>
            <button className={`btn  btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold  text-white `}>{children || "Get Started"}</button>
        </div>
    );
};

export default PrimaryButton;