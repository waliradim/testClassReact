import React from 'react'
import ThemeContext from './themeContext';


export default function UseContextApi({ theme, name }) {
    const style = theme === 'dark' ? { backgroundColor: '#F1E999', color: '#38A6F1' } : null;
    return (<div style={style}>
        <h1>Name : {name}</h1>
        <p>this is used UseContext component </p>
    </div>
    )

}
