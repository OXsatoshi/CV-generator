
import StaticSideBar from './StaticSideBar'
import InputCollecter from './InputCollecter'
import './App.css'
import InputDisplayer from './InputDisplayer'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('nabil afia');
  const [email,setEmail] = useState('')
  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }
  function handleMailChange(e) {
    e.preventDefault();
    setEmail(e.target.value)
  }
  return (
    <>
      <StaticSideBar />
      <InputCollecter name={name} handleNameChange={handleNameChange}
        mail={email} handleMailChange={handleMailChange} />
      <InputDisplayer name={name} mail={email } />
    </>
  )
}

export default App
