import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Background, AppContainer } from './components/Common/Common'
import { Exchange } from './components/Exchange/Exchange'

function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    setTimeout(async () => {
      const list = await axios.get(
        'https://api.changenow.io/v1/currencies?active=true&fixedRate=true'
      )
      setList(list.data)
    }, 0)
  }, [])

  return (
    <div className='App'>
      <Background />
      <AppContainer>
        {list.length ? <Exchange currencyList={list} /> : null}
      </AppContainer>
    </div>
  )
}

export default App
