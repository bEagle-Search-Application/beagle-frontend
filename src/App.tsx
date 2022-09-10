import { Route, Routes } from 'react-router-dom'
import { Dashboard, HelpPage, AboutTheObject, Objects } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			{/* TODO: Arreglar el nombre */}

			<Route path='/informacion-del-objeto' element={<AboutTheObject />} />

			{/* TODO: Dinamizar mis objetos perdidos/encontrados */}
			<Route path='/mis-perdidos' element={<Objects />} />
			<Route path='/mis-encontrados' element={<Objects />} />

			<Route path='/ayuda' element={<HelpPage />} />

			<Route path='*' element={<h1>Introduzca una ruta correcta</h1>} />
		</Routes>
	)
}

export default App
