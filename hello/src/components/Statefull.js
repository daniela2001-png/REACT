import React from "react"


class Statefull extends React.Component {
    constructor() {
        super()
        this.state = {
            hi: "hi daniela"
        }
    }
    render() {
        return (
            <>
                <h1>{this.props.setTime}</h1>
                <h1>{this.state.hi}</h1>
            </>
        )
    }

}
export default Statefull;
