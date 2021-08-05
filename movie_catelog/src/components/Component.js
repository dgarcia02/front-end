//================Imports================//
import React from 'react'

//================Components================//
const Componenet = (props) => {

//================Return================
    return (
        <div>
            <h3>{props.show.title}</h3>
            <img src={props.show.image} />
            <details>
                <ul>
                    <li>{props.show.genre}</li>
                    <li>{props.show.rating}</li>
                    <li>{props.show.cast}</li>
                </ul>
            </details>
        </div>
    )
}

//================Export================//
export default Component
