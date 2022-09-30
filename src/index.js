import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from 'config/theme'
import './i18n'

const AppWrapper = props => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={LightTheme}>
          <App {...props} />
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppWrapper />, document.getElementById('app'))

reportWebVitals(process.env.NODE_ENV === 'development' ? console.log : null)
