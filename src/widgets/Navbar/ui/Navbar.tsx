import cls from './style.module.scss'
import {Link} from "react-router-dom";
import {SearchBar} from "../../../features/SearchBar";

export const Navbar = () => {

	return (
		<div className={cls.navbar}>
			<Link to="/" className={cls.logo}>
				Moviepoisk
			</Link>
			<SearchBar/>
		</div>
	);
}