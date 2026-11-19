import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import PartPage from './pages/PartPage'
import ExercisePage from './pages/ExercisePage'
import NotFound from './pages/NotFound'
import ExamPage from './pages/ExamPage'
import StrategyPage from './pages/StrategyPage'
import SearchPage from './pages/SearchPage'
import ReviewPage from './pages/ReviewPage'
import DailyPage from './pages/DailyPage'
import PracticePage from './pages/PracticePage'
import { FlashcardsHome, FlashcardsSession } from './pages/FlashcardsPage'
import ProgressPage from './pages/ProgressPage'
import { MockHome, MockRue, MockWriting } from './pages/MockPages'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="s/:section" element={<SectionPage />} />
        <Route path="s/:section/:part" element={<PartPage />} />
        <Route path="s/:section/:part/:exercise" element={<ExercisePage />} />
        <Route path="examen" element={<ExamPage />} />
        <Route path="estrategia" element={<StrategyPage />} />
        <Route path="buscar" element={<SearchPage />} />
        <Route path="repaso" element={<ReviewPage />} />
        <Route path="reto" element={<DailyPage />} />
        <Route path="practica" element={<PracticePage />} />
        <Route path="tarjetas" element={<FlashcardsHome />} />
        <Route path="tarjetas/:deck" element={<FlashcardsSession />} />
        <Route path="progreso" element={<ProgressPage />} />
        <Route path="simulacro" element={<MockHome />} />
        <Route path="simulacro/:n/rue" element={<MockRue />} />
        <Route path="simulacro/:n/writing" element={<MockWriting />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
