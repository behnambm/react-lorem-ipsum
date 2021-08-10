import React, { useState } from 'react'
import CopyButton from './components/CopyButton'
import Form from './components/Form'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > data.length) {
      amount = data.length
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>lorem ipsum generator </h3>

      <Form {...{ handleSubmit, count, setCount }} />
      <CopyButton text={text} />

      <article className='lorem-text'>
        {text.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
