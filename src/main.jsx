import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

import useWindowDimensions from './hooks/useWindowDimensions'


// These are my auth0 credentials which need to be in a .env file
  //the dotenv module uses commonjs require syntax so it did not work -need to fix
// const domain = process.env.REACT_APP_AUTH0_DOMAIN
const domain = 'dev-byc3adl2.us.auth0.com'
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const clientId = 'LNNZQfPtrZNq1nm7ERCLwPwBQqShaJFU'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain} 
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
