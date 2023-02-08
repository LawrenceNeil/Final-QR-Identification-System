import { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { LoginSection } from "../styles/Login.styled";

function Login() {
  const signIn = useSignIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3010/auth/login", {
        username: username,
        password: password,
      });
      console.log(response.data.message);
      if (response.data.message == "Login successful") {
        const session = response.data.session;
        signIn({
          token: session.Auth,
          tokenType: "Bearer",
          expiresIn: 3600,
          authState: { loggedIn: session.loggedIn },
        });
        window.location.href = "/dashboard";
      } else {
        setError(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginSection>
      {/* main container */}
      <div className="container">
        {/* content handler */}
        <div className="wrapper">
          {/* start of left side */}
          <div className="image-section">
            <span className="text">Welcome!</span>
            <img src="./images/login.svg" alt="" />
          </div>
          {/* end of left side */}
          {/* start of right side */}
          <div className="form-section">
            <form onSubmit={onSubmit}>
              <span className="form-title text">Login</span>
              <p>
                Welcome! Please fill username and password <br />
                to sign in into your account.
              </p>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <BiEnvelope className="icon" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <BiLock className="icon" />
              </div>
              {error && <div className="error">{error}</div>}
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
          {/* end of right side */}
        </div>
        {/* end of wrapper */}
      </div>
      {/* end of container */}
    </LoginSection>
  );
}

export default Login;
