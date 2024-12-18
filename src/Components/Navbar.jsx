import home from '../images/Homer.svg'
import like from '../images/Izbrannoe.svg'
import cart from '../images/card.svg'
import user from '../images/user.svg'
import { SlBasket } from 'react-icons/sl'
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { BiUser } from "react-icons/bi";

import '../Css/Main.css'
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
						<MdFavoriteBorder className='favorite-icon' />
						</Link>
					</li>
					<li>
						<Link to='./cart'>
								<SlBasket class='basket-icon'/>
						</Link>
					</li>
					<li>
						<Link to='/profile'>
						<CiUser className='profile-icon' />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Main
