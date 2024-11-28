import "./UserData.css"
import { UserDataType } from "../type/userdata"

type UserDataSetType = {
	userdata: UserDataType
}

const UserData = ({ userdata }: UserDataSetType) => {
	return (
		<>
			{userdata.name != null ? (
				<div className="userCard">
					<div className="userTop">
						<img src={userdata.avatar_url} alt="User Avatar" />
						<h1>{userdata.name}</h1>
						<h2>{userdata.login}</h2>
						<p>{userdata.bio}</p>
					</div>
					<div className="userMiddle">
						<div>
							<h3>Repos</h3>
							<p>{userdata.public_repos}</p>
						</div>
						<div>
							<h3>Followers</h3>
							<p>{userdata.followers}</p>
						</div>
						<div>
							<h3>Following</h3>
							<p>{userdata.following}</p>
						</div>
					</div>
					<div className="userBottom">
						<h3>Location</h3>
						<p>{userdata.location}</p>
                        <h3>Blog</h3>
                        <p>{userdata.blog}</p>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default UserData
