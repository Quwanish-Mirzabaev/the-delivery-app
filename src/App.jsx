import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Navbar'
import MainPage from './pages/MainPage'
import CartPage from './pages/cartPage'
import ProfilPage from './pages/ProfilPage'
import MyFavoritesPage from './pages/MyFavoritesPage'
function App() {
	return (
		<>
			<Main />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/profile' element={<ProfilPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/favorites' element={<MyFavoritesPage/>} />
			</Routes>
		</>
	)
}

export default App
