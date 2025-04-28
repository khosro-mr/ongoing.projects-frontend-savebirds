<template>
  <div class="team-member-mini-card">
    <div class="profile-image-container">
      <img :src="member.image" :alt="member.name" class="profile-image">
    </div>
    <div class="member-info">
      <h4 class="member-name">{{ member.name }}</h4>
      <p class="member-position">{{ member.position }}</p>
      <p class="member-department">{{ member.department }}</p>
      <p class="member-organization">{{ member.organization }}</p>
    </div>
    <div class="social-links">
      <a v-if="member.links.website" 
         :href="member.links.website" 
         target="_blank" 
         rel="noopener noreferrer"
         class="social-link">
        <i class="bi bi-globe2"></i>
      </a>
      <a v-if="member.links.email" 
         :href="'mailto:' + member.links.email" 
         class="social-link">
        <i class="bi bi-envelope"></i>
      </a>
      <a v-if="member.links.linkedin" 
         :href="member.links.linkedin" 
         target="_blank" 
         rel="noopener noreferrer"
         class="social-link">
        <i class="bi bi-linkedin"></i>
      </a>
      <a v-if="member.links.googleScholar" 
         :href="member.links.googleScholar" 
         target="_blank" 
         rel="noopener noreferrer"
         class="social-link">
        <i class="bi bi-journal-check"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberMiniCard',
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.team-member-mini-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.profile-image-container {
  width: 90px;
  height: 90px;
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
</style> 