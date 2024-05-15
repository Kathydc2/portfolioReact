import { Link } from "react-router-dom";
import Img1 from "../images/javascriptApi.png";
import Img2 from "../images/domWebApp.png";
import Img3 from "../images/responsiveBootstrap.png";
import Img4 from "../images/expressNodePic.png";
import Img5 from "../images/reactPic.png";
import Img6 from "../images/mongodbPic.png";

export default function ProjectLinks() {
  const projects = [
    { name: "Javascript and API Web Application", details: "This project demonstrates my ability to implement advanced JavaScript tools and features effectively. It showcases my understanding of the JavaScript event loop, my proficiency in generating asynchronous code using Promises and async/await syntax, my utilization of the fetch function to interact with an external web API, and my organization of files using modules and imports.", photo: `${Img1}`, projectUrl: "https://github.com/Kathydc2/SBA_308AImport.git" },
    { name: "DOM Web Application", details: "This project showcases my proficiency in working with the Document Object Model (DOM) by implementing its features in a practical manner. I utilize DOM properties, methods, and techniques to create a dynamic user experience within the web application. Additionally, it demonstrates my mastery of event-driven programming and handling DOM events. Basic form validation is also implemented, incorporating a combination of built-in HTML validation attributes and JavaScript-driven validation events.", photo:`${Img2}`, projectUrl: "https://github.com/Kathydc2/SBA316-MarioDOM.git" },
    { name: "Responsive Web Application with BootStrap", details: "In this project, I have developed a simple yet elegant website with a clean layout and styling. My website features a well-structured HTML layout and adheres to established visual design principles, ensuring a satisfying user experience. Combining three pages into one, the website remains responsive across various devices, delivering an optimal viewing experience to users.", photo: `${Img3}` , projectUrl: "https://github.com/Kathydc2/SBA.git"},
    { name: "Express and Node Server Application", details: "In this project, I demonstrate my understanding of Node.js and Express and my capability to apply their features practically. The project involves creating a server application with Node and Express, developing a RESTful API using Express, implementing Express middleware, and utilizing EJS templates to render views within the Express application.", photo: `${Img4}`, projectUrl: "https://github.com/Kathydc2/SBA318Express"},
    { name: "React Server Application", details: "In this project, I've utilized the 'Thinking in React' principles to showcase my understanding of how to represent UI state and determine where it should reside within the application. By applying these principles firsthand, I've demonstrated my ability to design and manage state effectively in a React project.", photo: `${Img5}`, projectUrl: "https://github.com/Kathydc2/menuReact.git"},
    { name: "MongoDB Server Application", details: "In this project, I showcase my understanding of MongoDB by implementing its core features in practical scenarios. I create a server application using Node, Express, and MongoDB, establishing a solid backend foundation. Leveraging MongoDB Compass, I incorporate sample data to facilitate development and testing. Utilizing Express and MongoDB, I develop a comprehensive CRUD API to enable efficient data management. Through this project, I demonstrate my capability to work with MongoDB in real-world applications, focusing on building a functional and reliable backend system.", photo: `${Img6}`, projectUrl: "https://github.com/Kathydc2/SBAMongoDB.git" },
  ];

  return (
    <div className="projectList">
      {projects.map((project, idx) => {
        const { name, details, photo, projectUrl } = project;

        return (
          <div className="listing" key={idx}>
            <Link to={projectUrl} className="projectBox" target="_blank" rel="noopener noreferrer">
              <img className="pic" src={photo} alt={name} />
              <h2>{name}</h2>
            </Link>
            <div className="info">
           
              <hr />
              <p>{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}