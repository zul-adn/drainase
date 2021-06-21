import React from 'react';

export default function button(props) {
    return (
        <button
            className="btn-ext"
            onClick={props.click}
            disabled={props.disable}
            style={
                props.disable ? { backgroundColor: '#d1d8e0' } : { backgroundColor: props.type === 'primary' ? props.color : '#fff',  border : `1px solid ${props.color}`, marginBottom: 5, color: props.type === 'primary' ?  '#fff' : props.color  }
            }>
            {props.label}
        </button>
    )
}
