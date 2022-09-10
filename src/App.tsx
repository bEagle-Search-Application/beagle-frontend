import { Route, Routes } from 'react-router-dom'
import {
	Dashboard,
	HelpPage,
	AboutTheObject,
	Objects,
	Settings,
	SearchResults,
} from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			{/* TODO: Arreglar el nombre */}

			<Route path='/informacion-del-objeto' element={<AboutTheObject />} />
			<Route path='/resultados' element={<SearchResults />} />

			{/* TODO: Dinamizar mis objetos perdidos/encontrados */}
			{/* TODO: Se necesita una cuenta para ver estas páginas */}
			<Route path='/mis-perdidos' element={<Objects />} />
			<Route path='/mis-encontrados' element={<Objects />} />

			<Route path='/ayuda' element={<HelpPage />} />
			<Route path='/configuraciones' element={<Settings />} />

			<Route path='*' element={<h1>Introduzca una ruta correcta</h1>} />
		</Routes>
	)
}

export default App
