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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/update";

const Profile = () => {

	const [openUpdate, setOpenUpdate] = useState(false);

	const { currentUser } = useContext(AuthContext);

	const userId = parseInt(useLocation().pathname.split("/")[2]);

	const { isLoading, error, data } = useQuery(["user"], () =>
		makeRequest.get("/users/find/" + userId).then((res) => {
			return res.data;
		})
	);

	const { isLoading: relationshipIsLoading, data: relationshipData } = useQuery(["relationship"],
		() =>
			makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
				return res.data;
			})
	);

	const queryClient = useQueryClient();

	const mutation = useMutation(
		(following) => {
			if (following) return makeRequest.delete("/relationships?userId=" + userId);
			return makeRequest.post("/relationships", { userId })
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["relationship"]);
			},
		}
	);

	// console.log(relationshipData);

	const handleFollow = () => {
		mutation.mutate(relationshipData?.includes(currentUser.id));
	};

	return (
		<div className="profile">
			{(isLoading ? "loading" :
				<>
					<div className="images">
						<img
							src={data?.coverPic}
							alt=""
							className="cover" />
						<img
							src={data?.profilePic}
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
								<span>{data?.name}</span>
								<div className="info">
									<div className="item">
										<PlaceIcon />
										<span>{data?.city}</span>
									</div>
									<div className="item">
										<LanguageIcon />
										<span>{data?.website}</span>
									</div>
								</div>
								{relationshipIsLoading ? "loading" :
									userId === currentUser.id ?
										<button>update</button>
										: (
											<button onClick={handleFollow}>
												{relationshipData?.includes(currentUser.id)
													? "Following"
													: "Follow"
												}
											</button>
										)}
							</div>
							<div className="right">
								<EmailOutlinedIcon />
								<MoreVertIcon />
							</div>
						</div>
						<Posts userId={userId} />
					</div>
				</>
			)}
			{openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
		</div>
	);
};

export default Profile;
