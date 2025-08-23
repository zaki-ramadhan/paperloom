import { Route, Routes } from 'react-router'

import Homepage from './pages/Homepage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/note/:id" element={<NoteDetailPage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
    </>
  )
}

export default App
