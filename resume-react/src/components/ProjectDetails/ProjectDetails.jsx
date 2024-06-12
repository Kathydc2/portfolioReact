import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectUrl } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(projectUrl);
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectUrl]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.photo} alt={project.name} />
      <p>{project.details}</p>
    </div>
  );
}



