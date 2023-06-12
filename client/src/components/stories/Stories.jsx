import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {

	const { currentUser } = useContext(AuthContext);

	const stories = [
		{
			id: 1,
			name: "Abhay Gupta",
			img: "https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
		},
		{
			id: 2,
			name: "Omkar Kulkarni",
			img: "https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
		},
		{
			id: 3,
			name: "Gnagu adla",
			img: "https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
		},
	]
	return (
		<div className='stories'>
			<div className='story'>
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
			</div>
			{stories.map((story) => (
				<div className='story' key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	);
};

export default Stories;