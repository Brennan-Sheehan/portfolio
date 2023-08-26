<template>
  <div class="container">
    <HeaderView class="header-view" />
    <ProfileView class="profile-view" />
    <h1 id="Projects" class="title">Projects</h1>
    <div class="projects">
      <ProjectCard
        v-for="card in this.projects"
        :key="card.title"
        :card="card"
      />
    </div>
    <h1 id="About" class="title">About</h1>
    <div class="about">
      <div class="about-container">
        <h2>Experience</h2>
        <h3>Goldfinger Inc. Charleston, SC</h3>
        <p>October 2019- May 2023</p>
        <p>Lead Systems Integrator and Systems Specialist</p>
        <ul class="bullets">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Devised, formulated, and deployed POS System and Card Reader
              Software in a lab environment to ensure effective on-site
              implementation. Resulting in 200 units deployed with zero failures
            </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Assumed a system specialist role to identify and rectify all
              manufacturing defects. Traveled to Vietnam over a six week period
              to assess quality control during manufacturing
            </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Co-designed Linux Based POS System. Acquired skills on Linux
              server processes to design and build the Linux server back-end
              hosting the Java front-end application.
            </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Facilitated multiple customers with unique, complex problems.
              Transformed customer requests into tangible products by
              translating non-technical terms into code or schematics
            </p>
          </li>
        </ul>
        <svg
          class="divider"
          xmlns="http://www.w3.org/2000/svg"
          width="246"
          height="3"
          viewBox="0 0 246 3"
          fill="none"
        >
          <path d="M0.5 2L245.5 1" stroke="#F4BE3A" />
        </svg>
        <h3 class="company">Andy Free Construction Charleston,SC</h3>
        <p>August 2017 - October 2019</p>
        <p>Elevator Technician</p>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Installed, serviced, and maintained residential elevators
              throughout the state of South Carolina
            </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Streamlined project life-cycle by spearheading the process of
              modifying proof of concept schematics to customer requests,
              resulting in reduced installation time by 75%
            </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <path
                d="M3 0C1.34274 0 0 1.4543 0 3.24926C0 5.04421 1.34274 6.49852 3 6.49852C4.65726 6.49852 6 5.04421 6 3.24926C6 1.4543 4.65726 0 3 0Z"
                fill="#F4BE3A"
              />
            </svg>
            <p>
              Briefed the manufacturer on feedback to optimize product design
              and increase safety
            </p>
          </li>
        </ul>
      </div>
      <div class="education-container">
        <div class="education">
          <h2>Education</h2>
          <h3>Tech Elevator National Live Remote</h3>
          <p>May 2023 - August 2023</p>
          <p>
            Graduated a 14-week full-stack coding bootcamp learning how to
            create dynamic web-based software systems using Java providing 800+
            hours of development education and application. Solved all modules
            on time with 100% accuracy, managed multiple team projects,
            coordinated with project managers, and produced 2 full-stack web
            applicatons.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from "./HeaderView.vue";
import ProfileView from "./ProfileView.vue";
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "HomeView",
  components: {
    HeaderView,
    ProfileView,
    ProjectCard,
  },

  data() {
    return {
      projects: [
        {
          title: "Beer Buddy",
          bigImage: require("../assets/Home-Page.png"),
          smallImages: [
            require("../assets/Brewery-Page.png"),
            require("../assets/Brewer-Page.png"),
            require("../assets/Manager-Page.png"),
            require("../assets/Beer-Page.png"),
            require("../assets/Login-Modal.png"),
          ],
          description:
            "A web application that allows users to search for beers and breweries in their area. Users can create an account to save their favorite beers and breweries.",
          frontTech: "Front-end: Vue hosted on AWS S3",
          backTech: "Back-end: Java hosted on AWS EC2",
          liveLink: "http://brewerybeerbuddy.com",
          githubLink: "https://github.com/Brennan-Sheehan/brewery-finder",
        },
        {
          title: "Job Search Dashboard",
          bigImage: require("../assets/Job-Dark.png"),
          smallImages: [require("../assets/Job-Light.png")],
          description:
            "Developing a job search dashboard aimed at streamlining the job seeking process.The platform will soon integrate with a robust RESTful backend powered by Java, Spring, and PostgreSQL to enhance its functionalities further.",
          frontTech: "",
          backTech: "",
          liveLink: "",
          githubLink: "https://github.com/Brennan-Sheehan/Job-Search-Dashboard",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.container {
  background: var(--dark-foreground, #353543);
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.divider {
  align-self: center;
}
.about-container {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.3125rem;
  border-radius: 0.3125rem;
  background: var(--dark-accent, #4a4962);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 2rem;
  padding: 1rem;
}

.about-container h2 {
  align-self: center;
}

.about-container li {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.about-container svg {
  margin-top: 0.4rem;
  overflow: visible;
}

.education-container {
  border-radius: 0.3125rem;
  background: var(--dark-accent, #4a4962);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 2rem;
  padding: 1rem;
}

.education {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;
}
.education h2 {
  align-self: center;
}

@media (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .projects {
    margin: 0 8rem 0 8rem;
  }
  .about {
    display: flex;
    max-width: 1200px;
  }

  .education-container {
    max-height: 300px;
    max-width: 500px;
  }
}
@media (min-width: 1024px) {
  .projects {
    display: flex;
  }
  #Projects {
    margin-top: 3rem;
  }
  .profile-view {
    position: absolute;
    top: 5rem;
    width: 40%;
  }
  .header-view {
    display: flex;
    gap: 15rem;
    margin: 3rem;
  }
}
</style>
