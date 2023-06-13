import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {


	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const [err, setErr] = useState(null);

	const navigate = useNavigate()

	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			await login(inputs);
			navigate("/");
		} catch (err) {
			setErr(err.response?.data)
		}
	};

	// console.log(err);

	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1> Welcome! </h1>
					<p>Find, Connect & Express yourself.</p>
					<span> Don't have an account already? </span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Username"
							name="username" onChange={handleChange}
						/>
						<input type="password" placeholder="Password"
							name="password" onChange={handleChange}
						/>
						{err && err}
						<button onClick={handleLogin}>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
