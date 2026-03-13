
import hero from "../assets/hero.jpeg";

function Login() {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="login-box">

        <h2>Welcome Back</h2>

        <form>

          <input 
            type="email"
            placeholder="Enter your email"
          />

          <input 
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;

