import { Route, Routes } from 'react-router-dom'
import { Dashboard, HelpPage, InformacionObjeto, Objetos } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			{/* TODO: Arreglar el nombre */}

			<Route path='/informacion-del-objeto' element={<InformacionObjeto />} />

			{/* TODO: Dinamizar mis objetos perdidos/encontrados */}
			<Route path='/mis-perdidos' element={<Objetos />} />
			<Route path='/mis-encontrados' element={<Objetos />} />

			<Route path='/ayuda' element={<HelpPage />} />

			<Route path='*' element={<h1>Introduzca una ruta correcta</h1>} />
		</Routes>
	)
}

export default App
