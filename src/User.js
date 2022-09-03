import React from 'react'
const User = (props) => {
    // console.warn(props.data.age)
    // console.log(props.data)
    const {data} = props


    return (
        <div>
            USER Component
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
        </div>

    )

}
export default User