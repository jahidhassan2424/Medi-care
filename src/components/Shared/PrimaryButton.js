import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;