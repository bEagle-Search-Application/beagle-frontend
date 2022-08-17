import { Route, Routes } from 'react-router-dom'
import { Dashboard, Objeto } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			{/* TODO: Arreglar el nombre */}
			<Route path='/informacion-del-objeto' element={<Objeto />} />

			<Route path='*' element={<h1>Introduzca una ruta correcta</h1>} />
		</Routes>
	)
}

export default App
