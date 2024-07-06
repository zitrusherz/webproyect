import React from 'react'
import Layout from './layout/Layout'
import { BrowserRouter } from "react-router-dom"
import RouterMain from './router/Router'

export const URLBACKEND = "http://127.0.0.1:8000/";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterMain/>
      </Layout>
    </BrowserRouter>
  )
}

export default App