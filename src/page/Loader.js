import React from 'react'
import '../css/loader.css'

// Loader Image Ref https://gifer.com/en/BTBq
function Loader(props) {
    const start = props.start;
    return (
        <>
            {
                start &&
                <div className="loading-container">
                </div>
            }
        </>

    )
}

export default Loader