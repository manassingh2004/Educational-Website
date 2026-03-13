
import { useNavigate } from "react-router-dom"

import hero from "../assets/hero.jpeg"
import student from "../assets/react.jpg"
import Contact from "../assets/node.jpg"

function Home() {

  const navigate = useNavigate()

  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-text">

          <h1>Learn Skills Online</h1>

          <p>
            Join thousands of students learning programming,
            web development and modern technologies.
          </p>

          <button onClick={() => navigate("/courses")}>
            Explore Courses
          </button>

        </div>

        <div className="hero-image">
          <img src={hero} alt="hero"/>
        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">
          <h3>Expert Teachers</h3>
          <p>Learn from industry professionals.</p>
        </div>

        <div className="feature-card">
          <h3>Flexible Learning</h3>
          <p>Study anytime anywhere.</p>
        </div>

        <div className="feature-card">
          <h3>Certification</h3>
          <p>Get certificates after completing courses.</p>
        </div>

      </section>


      {/* TESTIMONIAL */}

      <section className="testimonial">

        <h2>What Our Students Say</h2>

        <div className="testimonial-box">

          <img src={student} alt="student"/>

          <p>
            This platform helped me learn React and build
            real projects. I even got my first internship
            after completing the courses.
          </p>

          <h4>- Rahul Sharma</h4>

        </div>

      </section>


          </div>

  )
}

export default Home;
