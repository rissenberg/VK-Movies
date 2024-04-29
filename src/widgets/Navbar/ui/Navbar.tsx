import cls from './style.module.scss'
import {Link} from "react-router-dom";

export const Navbar = () => {

	return (
		<div className={cls.navbar}>
			<Link to="/" className={cls.logo}>
				Moviepoisk
			</Link>
		</div>
	);
}