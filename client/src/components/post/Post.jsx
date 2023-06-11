import React, { useState } from 'react';
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from '../comments/Comments';
import moment from "moment";

const Post = ({ post }) => {

	const [commentOpen, setCommentOpen] = useState(false);

	const liked = true;

	return (
		<div className='post'>
			<div className='container'>
				<div className='user'>
					<div className='userInfo'>
						<img src={post.profilePic} alt="" />
						<div className='details'>
							<Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
								<span>{post.name}</span>
							</Link>
							<span className='date'> {moment(post.createdAt).fromNow()}</span>
						</div>
					</div>
					<MoreHorizIcon />
				</div>
				<div className='content'>
					<p>{post.desc}</p>
					<img src={"./upload/" + post.img} alt="" />
				</div>
				<div className='info'>
					<div className='item'>
						{liked ? <FavoriteOutlinedIcon style={{ color: "cyan" }} /> : <FavoriteBorderOutlinedIcon />}
						53 likes
					</div>
					<div className='item' onClick={() => setCommentOpen(!commentOpen)}>
						<TextsmsOutlinedIcon />
						14 Comments
					</div>
					<div className='item'>
						<ShareOutlinedIcon />
						Share
					</div>
				</div>
				{commentOpen && <Comments postId={post.id} />}
			</div>
		</div>
	)
}

export default Post;