import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Routes from "./routes/Routes.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>

            <Routes/>
        </AuthProvider>
    </QueryClientProvider>
)
