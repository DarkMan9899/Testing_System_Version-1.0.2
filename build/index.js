import  React from  'react'
import ReactDOM from 'react-dom/client'
import app from "./"

const  root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <app/>
    </React.StrictMode>
)