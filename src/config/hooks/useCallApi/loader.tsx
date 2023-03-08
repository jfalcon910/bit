import React from 'react';

const Loader = () => {
    return(
        <div 
            className="loading-component" 
            style={{
                position: 'fixed', 
                width: '100%', 
                height: '100%', 
                top: 0, 
                left: 0, 
                background: 'rgba(255,255,255,0.5)',
                zIndex: 10,
                paddingTop: '200px'
            }}
        >
            <div className="container">
                <div className="d-flex justify-content-center">
                    <span style={{lineHeight: '35px', marginLeft: '10px'}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Loader;