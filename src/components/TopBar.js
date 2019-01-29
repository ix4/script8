import React from 'react'
import Updater from '../containers/Updater.js'
import Menu from '../containers/Menu.js'

const TopBar = () => (
  <div className='TopBar'>
    <Updater />
    <Menu />
  </div>
)

export default TopBar
