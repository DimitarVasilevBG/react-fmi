import React from 'react'

const styles = {
    backgroundColor: 'green',
    height: '30px',
    width: '100%',
    position: 'fixed',
    bottom: 0
}

export default function Footer(){
    return(
        <div className="footer" style = {styles}>
            <span>Footer works!</span>

        </div>
    );
}