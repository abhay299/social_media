import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./profile.scss";

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
					alt=""
					className="cover" />
				<img
					src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
					alt=""
					className="profilePic" />
			</div>
			<div className="profileContainer">
				<div className="userInfo">
					<div className="left">
						<a href="https://facebook.com">
							<FacebookTwoToneIcon fontSize="small" />
						</a>
						<a href="https://instagram.com">
							<InstagramIcon fontSize="small" />
						</a>
						<a href="https://linkedin.com">
							<LinkedInIcon fontSize="small" />
						</a>
						<a href="https://twitter.com">
							<TwitterIcon fontSize="small" />
						</a>
					</div>
					<div className="center"></div>
					<div className="right"></div>
				</div>
			</div>
		</div>
	)
}

export default Profile;
