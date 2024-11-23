import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'

const queryClient = new QueryClient()

function App() {
    return (
        <>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools />
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}

export default App
