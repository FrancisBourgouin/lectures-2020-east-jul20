import React from 'react'

const Intro = (props) => {
  const { setIntro, intro } = props
  const h1Class = intro ? "title intro_start" : "title"
  return (
    <>
      <h1 className={h1Class}>
        <span className="letter">G</span><span className="text">ame</span>
        <span className="letter">T</span><span className="text">ournament</span>
        <span className="letter">M</span><span className="text">anagement</span>
        <span className="letter">S</span><span className="text">ystem</span>
      </h1>
      <button onClick={() => { setIntro(true) }}>Start!</button>
    </>
  )
}

export default Intro