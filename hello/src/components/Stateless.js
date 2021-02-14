import React, { useState } from "react"

export const Stateless = (props) => {
    return (
        <>
            <button onClick={() => props.name(Math.floor(Math.random() * 10))}>CLICK ME</button>
        </>
    )
}
