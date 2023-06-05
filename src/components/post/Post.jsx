import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='user'>
				<div className='userInfo'>
					<img src={post.img} alt="" />
					<div className='details'>
						<Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
							<span>{post.name}</span>
							<span className='date'>1 min ago</span>
						</Link>
					</div>
				</div>
				<MoreHorizIcon />
			</div>
			<div className='content'></div>
			<div className='info'></div>
		</div>
	)
}

export default Post;