import React from 'react'

function Form({ handleSubmit, count, setCount }) {
  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Paragraphs: </label>
      <input
        type='number'
        name='amount'
        id='amount'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button type='submit' className='btn'>
        generate
      </button>
    </form>
  )
}

export default Form
