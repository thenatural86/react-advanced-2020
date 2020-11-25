import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'pete',
    age: 24,
    message: 'rando mess',
  })
  // console.log(person)
  const { name, age, message } = person

  const changeMessage = () => {
    setPerson({ ...person, message: 'yolo world' })
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Yolo Button
      </button>
    </>
  )
}

export default UseStateObject
