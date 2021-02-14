import React from 'react'

export default function Props(props) {
    const {age, name} =  props
    return (
        <div>
            <h1>Hi my name is {name} and my age is {age}</h1>
        </div>
    )
}
