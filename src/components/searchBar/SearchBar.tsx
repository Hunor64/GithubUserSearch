import { useState } from "react"
import "./SearchBar.css"
import { UserDataType } from "../type/userdata"

type SearchBarProps = {
    saveUserData: (username: UserDataType) => void
}

const SearchBar = ({saveUserData}: SearchBarProps) => {
	const [user, setUser] = useState("")

	const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser(e.target.value)
	}

	const fetchUser = async () => {
		try {
			const response = await fetch(`https://api.github.com/users/${user}`)
			if (!response.ok) {
				throw new Error("Network response was not ok")
			}
			const data = await response.json()
			console.log(data)
            saveUserData(data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="search-form">
			<img
				className="searchIcon"
				src="./images/icon-search.svg"
				alt="Search Icon"
			/>
			<input
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						fetchUser()
					}
				}}
				value={user}
				onChange={handleUserChange}
				className="userInput"
				type="text"
				placeholder="Search GitHub User"
			/>
			<button onClick={fetchUser} className="searchButton">
				Search
			</button>
		</div>
	)
}

export default SearchBar
