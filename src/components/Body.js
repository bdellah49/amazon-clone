import React from 'react'
import Header from './sub-header/body/Header.js'
function Body({infos,visibility}) {
  return (
    <div className='Body'>
       <Header infos = {infos} visibility={visibility}/> 
    </div>
  )
}

export default Body