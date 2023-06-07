import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import Posts from "../../components/posts/Posts";

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
				<div className="userInformation">
					<div className="left">
						<a href="https://facebook.com">
							<FacebookTwoToneIcon fontSize="medium" />
						</a>
						<a href="https://instagram.com">
							<InstagramIcon fontSize="medium" />
						</a>
						<a href="https://linkedin.com">
							<LinkedInIcon fontSize="medium" />
						</a>
						<a href="https://twitter.com">
							<TwitterIcon fontSize="medium" />
						</a>
					</div>
					<div className="center">
						<span>Abhay Gupta</span>
						<div className="info">
							<div className="item">
								<PlaceIcon />
								<span>USA</span>
							</div>
							<div className="item">
								<LanguageIcon />
								<span>abhay.dev</span>
							</div>
						</div>
						<button>follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
