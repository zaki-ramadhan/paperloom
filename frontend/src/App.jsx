import { Route, Routes } from 'react-router'

import Homepage from './pages/Homepage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div className='bg-base-300'>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/notes/:id" element={<NoteDetailPage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
    </div>
  )
}

export default App
