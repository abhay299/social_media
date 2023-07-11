import { Link, useNavigation } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import { useState } from "react";

const Register = () => {

	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
		name: "",
	});

	const [err, setErr] = useState(null);

	const navigate = useNavigation()

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	// console.log(inputs);

	const handleClick = async (e) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:8000/api/auth/register", inputs);
			navigate('/login')
		} catch (err) {
			setErr(err.response?.data);
		}
	};

	// console.log(err);

	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1> Socials </h1>
					<p>
						Meet, Greet, Repeat!
					</p>
					<span> Do you have an account? </span>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
				<div className="right">
					<h1>Register</h1>
					<form>
						<input required
							type="text"
							placeholder="Username"
							name="username"
							onChange={handleChange}
						/>
						<input required
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
						/>
						<input required
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
						/>
						<input required
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange} />
						{err && err}
						<button onClick={handleClick}>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
