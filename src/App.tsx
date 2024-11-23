import { QueryClient } from '@tanstack/react-query'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
