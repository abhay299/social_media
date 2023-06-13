import { useContext, useState } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {

	const { currentUser } = useContext(AuthContext);

	const [file, setFile] = useState(null);

	const { isLoading, error, data } = useQuery(["stories"], () =>
		makeRequest.get("/stories").then((res) => {
			return res.data;
		})
	);

	// console.log(data);

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);

			const update = await makeRequest.post("/upload", formData);
			return update.data;
		} catch (err) {
			console.log(err);
		}
	};

	const queryClient = useQueryClient();

	const mutation = useMutation(
		(newStory) => {
			return makeRequest.post("/stories", newStory);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["stories"]);
			},
		}
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let imgUrl = "";
		if (file) imgUrl = await upload();
		console.log(imgUrl);

		mutation.mutate({ img: imgUrl });
		setFile(null);
	};

	// const stories = [
	// 	{
	// 		id: 1,
	// 		name: "Abhay Gupta",
	// 		img: "https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
	// 	}];

	return (
		<div className='stories'>
			<div className='story'>
				<img src={"/upload/" + currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
				<label htmlFor='stor' className='btns'>
					+
				</label>
				<input
					type='file'
					name='file'
					id='stor'
					onChange={(e) => setFile(e.target.files[0])}
					style={{ display: "none" }}
				/>
				<button onClick={handleSubmit} className='btnes'>
					Add Story
				</button>
			</div>
			{error ? "Something went wrong..."
				: isLoading
					? "loading"
					: data.map((story) => {
						return (
							<div className='story' key={story.id}>
								<img src={"/upload/" + story.img} alt="" />
								<span>{story.name}</span>
							</div>
						)
					}
					)}
		</div>
	);
};

export default Stories;