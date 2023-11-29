import React from 'react'

const Footer = ({tasks}) => {
  return (
    <footer>
      <p>{tasks} task {tasks === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer