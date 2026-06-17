import { Routes } from 'react-router-dom'
import './App.scss'

import Index from './pages/Routes'

import { ConfigProvider } from 'antd'


function App() {

  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: '#1d3557' }, components: { Button: { controlOutlineWidth: 0 } } }}>
        <Index />
      </ConfigProvider>
    </>
  )
}

export default App
