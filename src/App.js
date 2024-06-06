import React from 'react'
import UpperComponent from './Components/UpperComponent'
import ProfileComponent from './Components/ProfileComponent'
import Card from '../src/Components/Card/Card'
const App = () => {
  return (
    <div className='min-h-screen my-5 max-w-screen-xl mx-5'>
      <UpperComponent />
      <ProfileComponent />
      <div className='items'>
        <Card />
      </div>
    </div>
  )
}

export default App
