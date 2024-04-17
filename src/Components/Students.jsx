import React from 'react'
import propTypes from 'prop-types'

const Students = (props) => {
  return (
    <div className='Student'>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
        <p>Rapper: {props.isRapper  ? "yes" : "no"}</p>
    </div>
  )
}

Students.prototype = {
    name: propTypes.string,
    age: propTypes.number,
    isRapper: propTypes.bool,
}
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isRapper: false,
}

export default Students