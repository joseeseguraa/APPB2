import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import PartPage from './pages/PartPage'
import ExercisePage from './pages/ExercisePage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="s/:section" element={<SectionPage />} />
        <Route path="s/:section/:part" element={<PartPage />} />
        <Route path="s/:section/:part/:exercise" element={<ExercisePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
