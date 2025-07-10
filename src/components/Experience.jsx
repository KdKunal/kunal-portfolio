import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-white p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Experience</h3>
      <ul className="space-y-4">
        <li>
          <strong>Senior Software Engineer – Accenture</strong> (2023 – Present)
          <p>Worked on security of the banking application to implement the 2factor authentication.</p>
          <p>Created documents of the apis & created and the flow diagrams to facilitate the understanding of the application to client.</p>
          <p>Worked sprint wise using agile methodology to deliver the features required.</p>
          <p>Used swagger to create an explanation and business understanding of the rest apis that I created.</p>
          <p>Used libraries of Java and Spring security to achieve the development.</p>
          <p>Created github workflows, dockerfile and helm charts for the deployment of the service to environments like dev & uat.</p>
          <p>Conducted sessions to explain the working of the app to other resources.</p>
        </li>
        <li>
          <strong>Associate Software Engineer – TCS</strong> (2021 – 2023)
          <p>Part of agile team as a back-end developer.</p>
          <p>Responsible for implementing user stories and fixing bugs.</p>
          <p>Got acquainted with technologies such as Microservices, Java 8, Maven, Spring boot, MongoDB, Bitbucket.</p>
          <p>Used Chrome’s inbuilt dev tool for debugging.</p>
        </li>
        <li>
          <strong>Java Developer – Sapiens</strong> (2019 – 2021)
          <p>Worked as a software developer with team of, QAs, BAs to implement the logic for back-end based upon the requirements from client.</p>
          <p>Language was java8, project architechture was based on MVC.</p>
          <p>SVN was used as the verison controlling tool, and Jenkins for the CI/CD process.</p>
          <p>Worked with senior and lead developers to enhance and optimize existing code.</p>
          <p>Used tools such as Postman and Soap UI for debugging the web services.</p>
          <p>Fixed bugs and documented processes for increasing efficiency and reducing regression.</p>
          <p>Tools like Jboss for app srever was used, Maven for project building and MySQl as the Database.</p>
          <p>Implemented rules used for cover and premium calculations.</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;