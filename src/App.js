import React from 'react'
import './Styles.css'
import Menu from './Menu/Menu'
import Sidebar from './Sidebar/Sidebar'

const App = () => 
    <div className="frame">
        <Sidebar />
        <Menu />
    </div>

export default App