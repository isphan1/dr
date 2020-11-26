import React from 'react'

export default function publicLayout(props) {
    return (
        <div style={{minHeight:"100vh"}}>
            {props.children}
        </div>
    )
}
