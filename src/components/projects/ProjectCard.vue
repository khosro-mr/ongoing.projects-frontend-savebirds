<template>
  <div class="project-card">
    <div class="card-header">
      <div class="d-flex align-items-center">
        <i class="bi bi-file-earmark-text fs-4 me-2"></i>
        <h2 class="project-title mb-0">{{ project.id }}. {{ project.title }}</h2>
      </div>
      <a v-if="project.externalLink" 
         :href="project.externalLink" 
         target="_blank"
         rel="noopener noreferrer"
         class="project-link ms-2">
        Link
      </a>
    </div>
    
    <div class="team-members-section">
      <h3 class="team-heading">Team Members</h3>
      <div class="team-grid">
        <!-- Project 1 has a fixed order -->
        <template v-if="project.id === 1">
          <div v-for="memberId in [8, 9, 10, 1]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 2 has a custom fixed order -->
        <template v-else-if="project.id === 2">
          <div v-for="memberId in [1, 10, 2, 3, 9, 8]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 3 has the same order as Project 2 -->
        <template v-else-if="project.id === 3">
          <div v-for="memberId in [1, 10, 2, 3, 9, 8]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 4 has a custom fixed order -->
        <template v-else-if="project.id === 4">
          <div v-for="memberId in [4, 1, 10, 8, 9]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 5 has a custom fixed order -->
        <template v-else-if="project.id === 5">
          <div v-for="memberId in [1, 5, 4, 10, 8, 9]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 6 has a custom fixed order -->
        <template v-else-if="project.id === 6">
          <div v-for="memberId in [6, 1, 10, 8, 9]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Project 7 has a custom fixed order -->
        <template v-else-if="project.id === 7">
          <div v-for="memberId in [7, 1, 10, 8, 9]" :key="memberId" class="member-wrapper">
            <TeamMemberMiniCard 
              v-if="teamMembers.find(m => m.id === memberId)"
              :member="teamMembers.find(m => m.id === memberId)"
            />
          </div>
        </template>
        
        <!-- Other projects use regular order from data -->
        <template v-else>
          <div v-for="member in teamMembers" :key="member.id" class="member-wrapper">
            <TeamMemberMiniCard :member="member" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberMiniCard from './TeamMemberMiniCard.vue';

export default {
  name: 'ProjectCard',
  components: {
    TeamMemberMiniCard
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    teamMembers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.member-wrapper {
  flex: 1;
  min-width: 150px;
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
  
  .member-wrapper {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .member-wrapper {
    min-width: 130px;
  }
}
</style> 