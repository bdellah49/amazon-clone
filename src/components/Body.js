import React from 'react'
import Header from './sub-header/body/Header.js'
function Body({infos}) {
  return (
    <div className='Body'>
       <Header infos = {infos}/> 
    </div>
  )
}

export default Body