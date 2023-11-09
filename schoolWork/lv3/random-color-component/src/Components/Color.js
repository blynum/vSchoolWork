import React from "react"

// The functional components can accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

function Color(props) {
    // if (!props.colors.length) return null
    return (
        <div className="container">
            {props.colors.map((color, i) => (
                <div
                    key={i}
                    className="color"
                    style={{ background: color }}
                >
                </div>

            ))}

        </div>
    )
}

export default Color