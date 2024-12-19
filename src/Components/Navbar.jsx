import home from '../images/Homer.svg'
import like from '../images/Izbrannoe.svg'
import user from '../images/user.svg'
import { SlBasket } from 'react-icons/sl'

import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
function Main() {
	return (
		<div className='main-container'>
			<div className='nav-bar'>
				<ul>
					<li>
						<Link to='/'>
							<img src={home} alt='' />
						</Link>
					</li>
					<li>
						<Link to='/favorites'>
							<img src={like} alt='' />
						</Link>
					</li>
					<li>
						<Link to='./cart'>
								<SlBasket class='basket-icon'/>
						</Link>
					</li>
					<li>
						<Link to='/profile'>
						
							<img src={user} alt='' />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Main
