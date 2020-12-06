import React from 'react'

export default function StudentDetail(props) {
    console.log(props)
    return (
        <div>
            详情页:
            <h2>学号:{props.match.params.id}</h2>
        </div>
    )
}
