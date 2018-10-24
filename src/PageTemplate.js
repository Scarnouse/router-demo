import React from 'react'
import { MainMenu }  from './ui/MainMenu'

// SOMETHING

const PageTemplate = ({children}) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>

export default PageTemplate