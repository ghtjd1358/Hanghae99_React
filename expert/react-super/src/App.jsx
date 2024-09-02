import { useState } from 'react'
import './App.css'
import CreateData from './components/CreateData'
import DeleteData from './components/DeleteData'
import Fetchdata from './components/Fetchdata'
import UpdataData from './components/UpdataData'

function App() {
  const [users, setUsers] = useState([]);


  return (
    <>
      <CreateData setUsers = {setUsers}/>
      <Fetchdata users={users} setUsers={setUsers}/>
      <UpdataData/>
      <DeleteData/>
    </>
  )
}

export default App
