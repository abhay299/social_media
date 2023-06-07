import React, { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {

	const { currentUser } = useContext(AuthContext);

	const comments = [
		{
			id: 1,
			desc: "Hey, lovely picture",
			userId: 1,
			profilePicture:
				"https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
		},
		{
			id: 2,
			desc: "Such a cute photo of them",
			userId: 2,
			profilePicture:
				"https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
		},
	]
	return (
		<div className='comments'>
			<div className='write'>
				<img src={currentUser.profilePic} alt='' />
				<input type='text' placeholder='write a comment...'></input>
				<button>Send</button>
			</div>
			{
				comments.map(comment => (
					<div className='comment'>
						<img src={comment.profilePicture} alt="" />
						<div className='info'>
							<span>{comment.name}</span>
							<p>{comment.desc}</p>
						</div>
						<span className='date'>1 hour ago</span>
					</div>
				))
			}
		</div>
	);
};

export default Comments;
