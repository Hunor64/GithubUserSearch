import "./Header.css"
import LightIcon from "/images/lightIcon.svg"
import DarkIcon from "/images/darkIcon.svg"

type HeaderProps = {
	darkMode: boolean
	toggleDarkMode: () => void
}

const Header = (props: HeaderProps) => {
	return (
		<div className="header">
			<h1 className="websiteName">devfinder</h1>
			<button onClick={props.toggleDarkMode}>
				{props.darkMode ? "DARK" : "LIGHT"}
				<img
					src={props.darkMode ? DarkIcon : LightIcon}
					alt={props.darkMode ? "Dark Icon" : "Light Icon"}
				/>
			</button>
		</div>
	)
}

export default Header
