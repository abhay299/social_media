import React, { useContext, useState } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import moment from "moment";

const Comments = ({ postId }) => {

	const [desc, setDesc] = useState("");

	const { currentUser } = useContext(AuthContext);

	const { isLoading, error, data } = useQuery(['comments'], () =>
		makeRequest.get("/comments?postId=" + postId).then((res) => {
			return res.data;
		})
	);

	const queryClient = useQueryClient();

	const mutation = useMutation(
		(newComment) => {
			return makeRequest.post("/comments", newComment);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["comments"]);
			},
		}
	);

	const handleCLick = async (e) => {
		e.preventDefault();
		mutation.mutate({ desc, postId });
		setDesc("");
	};

	// const comments = [
	// 	{
	// 		id: 1,
	// 		desc: "Hey, lovely picture",
	// 		userId: 1,
	// 		profilePicture:
	// 			"https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
	// 	}
	// ]

	return (
		<div className='comments'>
			<div className='write'>
				<img src={currentUser.profilePic} alt='' />
				<input
					type='text' placeholder='write a comment...'
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button onClick={handleCLick}>Send</button>
			</div>
			{
				isLoading
					? "loading"
					: data.map(comment => (
						<div className='comment'>
							<img src={comment.profilePic} alt="" />
							<div className='info'>
								<span>{comment.name}</span>
								<p>{comment.desc}</p>
							</div>
							<span className='date'>{moment(comment.createdAt).fromNow()}</span>
						</div>
					))
			}
		</div>
	);
};

export default Comments;
