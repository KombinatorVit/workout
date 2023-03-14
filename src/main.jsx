import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Routes from "./routes/Routes.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>

        <Routes/>
    </QueryClientProvider>
)
