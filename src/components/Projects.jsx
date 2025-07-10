import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-white p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h4 className="text-xl font-semibold">Digital Signature Validator</h4>
          <p>Spring Boot microservice for X.509 signature validation and JWT token parsing.</p>
          <a className="text-blue-600" href="https://github.com/yourusername/signature-validator">GitHub Repo</a>
        </div>
        <div className="p-4 border rounded shadow">
          <h4 className="text-xl font-semibold">Cloud-based CI/CD Pipeline</h4>
          <p>Automated GKE deployments using GitHub Actions and Helm charts.</p>
          <a className="text-blue-600" href="https://github.com/yourusername/cloud-cicd-pipeline">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;