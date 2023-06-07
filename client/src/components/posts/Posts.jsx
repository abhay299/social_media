import './posts.scss';
import Post from "../post/Post";

const Posts = () => {

	const posts = [
		{
			id: 1,
			name: "Abhay Gupta",
			userId: 1,
			profilePic:
				"https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
			desc: "My pet found a friend :)",
			img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
		},
		{
			id: 2,
			name: "Abhay Gupta",
			userId: 2,
			profilePic:
				"https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
			desc: "asssssssssddddddddddddddddddda",
			img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
		},
		{
			id: 3,
			name: "Abhay Gupta",
			userId: 3,
			profilePic:
				"https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
			desc: "sdaaaaaaaaaaaaaaaada",
			img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
		},
	]

	return <div className='posts'>
		{posts.map(post => (
			<Post post={post} key={post.id} />
		))}
	</div>
};

export default Posts;