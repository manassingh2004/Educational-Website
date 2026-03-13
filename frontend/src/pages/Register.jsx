
import hero from "../assets/hero.jpeg";

function Register() {
  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="register-box">

        <h2>Create Account</h2>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;

