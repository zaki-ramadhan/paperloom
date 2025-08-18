import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <>
    <button onClick={() => toast.success("Congrats!")}>Click me</button>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </>
  )
}

export default App
