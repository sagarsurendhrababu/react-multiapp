import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    
    const [count, setCount] = useState(100);
    const [bgColor, setbgColor] = useState('');

    return( 
        <div className="col12 header" style={{backgroundColor: bgColor}}>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{setbgColor('red')}}>Color 1</button>
            <button onClick={()=>{setbgColor('green')}}>Color 2</button>
        </div>
    );
}

export default Header;
