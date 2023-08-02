import React from 'react';

export const Error = () => {
    return (
        <div className="error-wrapper" style={{textAlign:'center'}}>
            <h1 style={{fontSize:40, fontWeight:'bold',textAlign:'center'}}>Oops,Something went wrong!</h1>
            <h2 style={{fontsize:20, textAlign:'center',marginTop:10}}>Could not load the page, please try again!</h2>
        </div>
    );
};