import { useState } from 'react'
import { CssBaseline } from '@mui/material';

import FormFields from './components/FormFields.tsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <FormFields />
    </>
  )
}

export default App
