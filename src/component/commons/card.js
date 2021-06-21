import React from 'react'

export default function Card(props) {
    return (
        <div
            className="card"
            // style={
            //     { backgroundColor: props.type === 'primary' ? '#6c5ce7' : '#4A4A4A' }
            // }
        >
            {props.children}
        </div>
    )
}
