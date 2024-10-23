import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Routes from './Routes'
import Sidebar from './components/sidebar/Sidebar'
import TopNav from './components/TopNav'
import themeStore from './stores/themeStore'
import Login from './pages/Login'

import './App.css'

export default function App() {
  const { currentTheme, currentColor, setCurrentTheme, setColorTheme } =
    themeStore()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
    const colorClass = localStorage.getItem('colorMode', 'theme-color-blue')
    const userLoggedIn = localStorage.getItem('isAuthenticated')

    setCurrentTheme(themeClass)
    setColorTheme(colorClass)
    setIsAuthenticated(userLoggedIn === 'true')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Switch>
        
        <Route path='/login' exact>
          <Login onLogin={() => setIsAuthenticated(true)} />
        </Route>
        
        <Route
          render={(props) =>
            isAuthenticated ? (
              <div className={`layout ${currentTheme} ${currentColor}`}>
                <Sidebar {...props} />
                <div className='layout-content'>
                  <TopNav />
                  <div className='layout-content-main'>
                    <Routes />
                  </div>
                </div>
              </div>
            ) : (
              <Redirect to='/login' />
            )
          }

          // render={(props) =>
          // //   isAuthenticated ? (
          // //     <div className={`layout ${currentTheme} ${currentColor}`}>
          // //       <Sidebar {...props} />
          // //       <div className='layout-content'>
          // //         <TopNav />
          // //         <div className='layout-content-main'>
          // //           <Routes />
          // //         </div>
          // //       </div>
          // //     </div>
          // //   ) : (
          // //     <Redirect to='/login' />
          // //   )
          // // }
        />
      </Switch>
    </Router>
  )
}
