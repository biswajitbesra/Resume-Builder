import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Button from './components/Button.jsx'
import Form from './components/Form.jsx'
import Template from './components/Template.jsx'
import Template2 from './components/Template2.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Button />} />
            <Route path='/form' element={<Form />} />
            <Route path='/template/1' element={<Template />} />
            <Route path='/template/2' element={<Template2 />} />
        </Route>
    ),
    {
        basename: '/resume-builder'
    }
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)
