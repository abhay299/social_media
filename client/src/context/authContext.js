import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = async (inputs) => {

		const res = await axios.post("http://localhost:8000/api/auth/login", inputs, {
			withCredentials: true,
		});

		setCurrentUser(res.data)

		// setCurrentUser({
		// 	id: 1,
		// 	name: "Abhay Gupta",
		// 	profilePic:
		// 		"https://images.unsplash.com/photo-1517105274840-437212774105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
		// });
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};


