import { useEffect, useState } from "react"
import Header from "./components/header/Header"
import SearchBar from "./components/searchBar/SearchBar"
import UserData from "./components/userData/UserData"
import { UserDataType } from "./components/type/userdata"

const App = () => {
	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = document.cookie
			.split("; ")
			.find((row) => row.startsWith("darkMode="))
		return savedMode ? savedMode.split("=")[1] === "true" : true
	})

	const toggleDarkMode = () => {
		const newMode = !darkMode
		setDarkMode(newMode)
		document.cookie = `darkMode=${newMode}; path=/; max-age=31536000` // 1 year
	}

	useEffect(() => {
		document.body.className = darkMode ? "dark" : "light"
	})
  
  const [userName, setUserName] = useState({})

  const handleSetUsername = (username: UserDataType) => {setUserName(username)}

	return (
		<div className="app">
			<div className="container">
				<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<SearchBar saveUserData={handleSetUsername}/>
				<UserData userdata={userName}/>
			</div>
		</div>
	)
}

export default App
