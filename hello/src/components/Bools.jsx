import React from "react"

export const HelloBool = () => {

    const handleInput = (e) => {
        console.log("Valor input :" + e.target.value)
    }
    return (
        <>
            <input onChange={handleInput} placeholder="welcome back"></input>
        </>
    )
}
