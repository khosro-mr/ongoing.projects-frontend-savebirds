<template>
  <div class="container">
    <section class="page-overview text-center mb-5">
      <h1 class="display-4 fw-bold">Ongoing Projects</h1>
      <p class="lead">Showcase your project, if you use SaveBirds or cite it, simply by sending me (Mostafa M. Rezaee) your project title and team members' information.</p>
    </section>

    <section class="project-cards">
      <!-- Special handling for Project 1 -->
      <div v-if="projects[0].id === 1" class="project-card">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <i class="bi bi-file-earmark-text fs-4 me-2"></i>
            <h2 class="project-title mb-0">{{ projects[0].id }}. {{ projects[0].title }}</h2>
          </div>
          <a v-if="projects[0].externalLink" 
             :href="projects[0].externalLink" 
             target="_blank"
             rel="noopener noreferrer"
             class="project-link ms-2">
            Link
          </a>
        </div>
        
        <div class="team-members-section">
          <h3 class="team-heading">Team Members</h3>
          <div class="team-grid">
            <!-- Reversed order: Mostafa, Hamid, Andrew, Robert -->
            
            <!-- Mostafa -->
            <div class="team-member-mini-card">
              <div class="profile-image-container">
                <img src="/images/mostafa.m.rezaee.png" alt="Mostafa M. Rezaee" class="profile-image">
              </div>
              <div class="member-info">
                <h4 class="member-name">Mostafa M. Rezaee</h4>
                <p class="member-position">Ph.D. candidate</p>
                <p class="member-department">Data Science Program</p>
                <p class="member-organization">Bowling Green State University</p>
              </div>
              <div class="social-links">
                <a href="https://mostafa-mr.com/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-globe2"></i>
                </a>
                <a href="mailto:rezaeem@bgsu.edu" class="social-link">
                  <i class="bi bi-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/mostafa-m-rezaee/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=jvcCIJYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-journal-check"></i>
                </a>
              </div>
            </div>
            
            <!-- Hamid -->
            <div class="team-member-mini-card">
              <div class="profile-image-container">
                <img src="/images/hamid.shojaei.jpeg" alt="Hamid Shojaei" class="profile-image">
              </div>
              <div class="member-info">
                <h4 class="member-name">Hamid Shojaei</h4>
                <p class="member-position">Senior Data Science Advisor</p>
                <p class="member-department"></p>
                <p class="member-organization">Exelacom Inc.</p>
              </div>
              <div class="social-links">
                <a href="mailto:email" class="social-link">
                  <i class="bi bi-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/hamid-shojaei/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=RY50kBoAAAAJ" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-journal-check"></i>
                </a>
              </div>
            </div>
            
            <!-- Andrew -->
            <div class="team-member-mini-card">
              <div class="profile-image-container">
                <img src="/images/andrew.gregory.jpeg" alt="Andrew Gregory" class="profile-image">
              </div>
              <div class="member-info">
                <h4 class="member-name">Andrew Gregory</h4>
                <p class="member-position">Assistant Professor</p>
                <p class="member-department">Conservation Biology and Landscape Ecology</p>
                <p class="member-organization">University of North Texas</p>
              </div>
              <div class="social-links">
                <a href="https://biology.unt.edu/people/andrew-gregory" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-globe2"></i>
                </a>
                <a href="mailto:Andrew.Gregory@unt.edu" class="social-link">
                  <i class="bi bi-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/andrew-gregory-b1aa51159/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=I7rG0ksAAAAJ" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-journal-check"></i>
                </a>
              </div>
            </div>
            
            <!-- Robert -->
            <div class="team-member-mini-card">
              <div class="profile-image-container">
                <img src="/images/robert.c.green.jpeg" alt="Robert C. Green II" class="profile-image">
              </div>
              <div class="member-info">
                <h4 class="member-name">Robert C. Green II</h4>
                <p class="member-position">Associate Professor</p>
                <p class="member-department">Computer & Data Science</p>
                <p class="member-organization">Bowling Green State University</p>
              </div>
              <div class="social-links">
                <a href="https://rgreen13.gitlab.io/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-globe2"></i>
                </a>
                <a href="mailto:email" class="social-link">
                  <i class="bi bi-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/rob-green-6371772/" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=jNzxwwEAAAAJ" target="_blank" rel="noopener noreferrer" class="social-link">
                  <i class="bi bi-journal-check"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Regular ProjectCard for other projects -->
      <ProjectCard 
        v-for="project in projects.filter(p => p.id !== 1)" 
        :key="project.id" 
        :project="project"
        :team-members="getTeamMembersForProject(project.id)"
      />
    </section>
  </div>
</template>

<script>
import ProjectCard from '../components/projects/ProjectCard.vue';

export default {
  name: 'OngoingProjectsView',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "SaveBirds.app: A web tool for analyzing the North American Breeding Bird Survey data to enhance conservation in protected areas",
          externalLink: "https://savebirds.app"
        },
        {
          id: 2,
          title: "Introducing Bird Atlas Generator by SaveBirds.app: A Novel Tool for Creating Atlases Using BBS Data in North America",
          externalLink: ""
        },
        {
          id: 3,
          title: "Mapping Avian Hotspots: Discovering Geographic Concentrations of North American Birds with SaveBirds.app's Data-Driven Insights",
          externalLink: ""
        },
        {
          id: 4,
          title: "Assessing the Impact of Drought and Land-use Change on Northern Bobwhite Population Stability Using Emerging Hotspot Analysis and Multiscale Geographically Weighted Regression",
          externalLink: ""
        },
        {
          id: 5,
          title: "Greater Sage-Grouse are an umbrella species for shrub-steppe bird communities at range-wide scale",
          externalLink: ""
        },
        {
          id: 6,
          title: "Despite Concerns, PVA of American Kestrels at national scale reveals no significant population declines over the last 20 years",
          externalLink: ""
        },
        {
          id: 7,
          title: "Kentucky project",
          externalLink: ""
        }
      ],
      teamMembers: [
        {
          id: 1,
          name: "Mostafa M. Rezaee",
          position: "Ph.D. Candidate",
          department: "Data Science Program",
          organization: "Bowling Green State University",
          image: "/images/mostafa.m.rezaee.png",
          links: {
            website: "https://mostafa-mr.com/",
            email: "rezaeem@bgsu.edu",
            linkedin: "https://www.linkedin.com/in/mostafa-m-rezaee/",
            googleScholar: "https://scholar.google.com/citations?user=jvcCIJYAAAAJ&hl=en"
          }
        },
        {
          id: 2,
          name: "Masoud Javadpoor",
          position: "Research Assistant",
          department: "Geospatial Data Scientist and Urban Planning",
          organization: "Shiraz University",
          image: "/images/masoud.javadpoor.jpeg",
          links: {
            website: "https://masoud-javadpoor.com/",
            email: "email",
            linkedin: "https://www.linkedin.com/in/masoud-javadpoor/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=NHT9I8sAAAAJ"
          }
        },
        {
          id: 3,
          name: "Fábio Albuquerque",
          position: "Associate Professor",
          department: "College of Integrative Sciences and Arts",
          organization: "Arizona State University",
          image: "/images/fabio.albuquerque.png",
          links: {
            website: "",
            email: "email",
            linkedin: "https://www.linkedin.com/in/fabio-albuquerque-299067123/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=Fa7tJHgAAAAJ"
          }
        },
        {
          id: 4,
          name: "Ben Hendrickson",
          position: "PhD Student",
          department: "Biology",
          organization: "University of North Texas",
          image: "/images/ben.hendrickson.jpeg",
          links: {
            website: "",
            email: "email",
            linkedin: "",
            googleScholar: ""
          }
        },
        {
          id: 5,
          name: "Amanda Long",
          position: "MSc Student",
          department: "Biology",
          organization: "University of North Texas",
          image: "/images/amanda.long.jpeg",
          links: {
            website: "",
            email: "email",
            linkedin: "https://www.linkedin.com/in/amanda--long/",
            googleScholar: ""
          }
        },
        {
          id: 6,
          name: "Maddy Kaleta",
          position: "MSc Student",
          department: "Biology",
          organization: "University of North Texas",
          image: "/images/maddy.kaleta.jpeg",
          links: {
            website: "",
            email: "email",
            linkedin: "https://www.linkedin.com/in/rachel-pigg-461326186/",
            googleScholar: ""
          }
        },
        {
          id: 7,
          name: "Rachel Pigg",
          position: "Assistant Professor",
          department: "Department of Biology",
          organization: "University of Louisville",
          image: "/images/rachel.pigg.jpeg",
          links: {
            website: "",
            email: "email",
            linkedin: "https://www.linkedin.com/in/rachel-pigg-461326186/",
            googleScholar: ""
          }
        },
        {
          id: 8,
          name: "Robert C. Green II",
          position: "Associate Professor",
          department: "Department of Computer Science",
          organization: "Bowling Green State University",
          image: "/images/robert.c.green.jpeg",
          links: {
            website: "https://rgreen13.gitlab.io/",
            email: "email",
            linkedin: "https://www.linkedin.com/in/rob-green-6371772/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=jNzxwwEAAAAJ"
          }
        },
        {
          id: 9,
          name: "Andrew Gregory",
          position: "Assistant Professor",
          department: "Conservation Biology and Landscape Ecology",
          organization: "University of North Texas",
          image: "/images/andrew.gregory.jpeg",
          links: {
            website: "https://biology.unt.edu/people/andrew-gregory",
            email: "Andrew.Gregory@unt.edu",
            linkedin: "https://www.linkedin.com/in/andrew-gregory-b1aa51159/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=I7rG0ksAAAAJ"
          }
        },
        {
          id: 10,
          name: "Hamid Shojaei",
          position: "PhD Candidate",
          department: "Analytics Program",
          organization: "Bowling Green State University",
          image: "/images/hamid.shojaei.jpeg",
          links: {
            website: "",
            email: "email",
            linkedin: "https://www.linkedin.com/in/hamid-shojaei/",
            googleScholar: "https://scholar.google.com/citations?hl=en&user=RY50kBoAAAAJ"
          }
        }
      ],
      projectTeamAssignments: {
        1: [8, 9, 10, 1], // Project 1 team members: robert, andrew, hamid, mostafa
        2: [1, 10, 2, 3, 9, 8],    // Project 2 team members: mostafa, hamid, masoud, fabio, andrew, robert
        3: [1, 10, 2, 3, 9, 8],    // Project 3 team members: mostafa, hamid, masoud, fabio, andrew, robert
        4: [4, 1, 10, 8, 9],       // Project 4 team members: ben, mostafa, hamid, robert, andrew
        5: [1, 5, 4, 10, 8, 9],    // Project 5 team members: mostafa, amanda, ben, hamid, robert, andrew
        6: [6, 1, 10, 8, 9],       // Project 6 team members: maddy, mostafa, hamid, robert, andrew
        7: [7, 1, 10, 8, 9]        // Project 7 team members: rachel, mostafa, hamid, robert, andrew
      }
    }
  },
  methods: {
    getTeamMembersForProject(projectId) {
      const memberIds = this.projectTeamAssignments[projectId] || [];
      return this.teamMembers.filter(member => memberIds.includes(member.id));
    }
  }
}
</script>

<style scoped>
.page-overview {
  margin-top: 2rem;
}

.display-4 {
  color: #28a745;
  margin-bottom: 1rem;
}

.lead {
  max-width: 800px;
  margin: 0 auto;
}

.project-cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Styles for Project 1 custom implementation */
.project-card {
  background-color: #28a745;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: white;
}

.card-header {
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;
}

.project-link {
  color: white;
  text-decoration: underline;
  font-weight: 500;
  align-self: flex-start;
  margin-top: 3px;
}

.team-members-section {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0 0 10px 10px;
}

.team-heading {
  color: #343a40;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.team-member-mini-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 150px;
}

.profile-image-container {
  width: 80px;
  height: 80px;
  margin-bottom: 0.75rem;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #e9ecef;
}

.member-info {
  margin-bottom: 0.75rem;
}

.member-name {
  font-size: 1rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 0.25rem;
}

.member-position {
  font-size: 0.875rem;
  color: #495057;
  margin-bottom: 0.25rem;
}

.member-department,
.member-organization {
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: auto;
}

.social-link {
  color: #28a745;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.social-link:hover {
  color: #218838;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-header {
    flex-direction: column;
  }
  
  .project-link {
    margin-top: 1rem;
    align-self: flex-start;
  }
  
  .team-grid {
    flex-direction: column;
  }
  
  .team-member-mini-card {
    width: 100%;
  }
}
</style> 