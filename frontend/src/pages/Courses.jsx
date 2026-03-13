import CourseCard from "../Components/CourseCard";

import reactImg from "../assets/react.jpg";
import nodeImg from "../assets/node.jpg";
import jsImg from "../assets/javascript.jpg";

function Courses() {
  const courses = [
    {
      title: "React Development",
      description: "Build modern frontend applications with components, hooks and routing.",
      image: reactImg,
      category: "Frontend",
      rating: "4.8",
      students: "12k",
      duration: "8 Weeks",
      price: "₹999",
    },
    {
      title: "Node.js Backend",
      description: "Learn backend development using Node.js, Express and REST APIs.",
      image: nodeImg,
      category: "Backend",
      rating: "4.7",
      students: "10k",
      duration: "10 Weeks",
      price: "₹1199",
    },
    {
      title: "JavaScript Mastery",
      description: "Master modern JavaScript concepts and build real-world projects.",
      image: jsImg,
      category: "Programming",
      rating: "4.9",
      students: "15k",
      duration: "6 Weeks",
      price: "₹899",
    },
  ];

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Choose the best course and start learning with professional guidance.</p>
      </div>

      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;