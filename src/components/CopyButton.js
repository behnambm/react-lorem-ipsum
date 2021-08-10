import React, { useState, useEffect } from 'react'
import { MdDone } from 'react-icons/md'

function CopyButton({ text }) {
  const [showCopied, setShowCopied] = useState(false)

  useEffect(() => {
    if (showCopied) {
      setTimeout(() => {
        setShowCopied(false)
      }, 4000)
    }
  }, [showCopied])

  return (
    <button
      className='btn copy'
      disabled={showCopied}
      onClick={() => {
        navigator.clipboard.writeText(text)
        setShowCopied(!showCopied)
      }}
    >
      {showCopied ? (
        <>
          <MdDone /> Copied to clipboard
        </>
      ) : (
        'copy'
      )}
    </button>
  )
}

export default CopyButton
