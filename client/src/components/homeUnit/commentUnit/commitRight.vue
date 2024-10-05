<template>
  <div class="experience">
    <h2>How was your experience?</h2>
    <div class="mood">

      <div @click="setMood('unhappy')" class="mood-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(239, 68, 68)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Unhappy Face</title>
          <circle cx="12" cy="12" r="10" fill="none" />
          <circle cx="9" cy="9" r="0.4" fill="rgb(239, 68, 68)" />
          <circle cx="15" cy="9" r="0.4" fill="rgb(239, 68, 68)" />
          <path d="M8 15c2 -2 6 -2 8 0" stroke="rgb(239, 68, 68)" />
        </svg>
      </div>

      <div @click="setMood('neutral')" class="mood-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(234, 179, 8)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Neutral Face</title>
          <circle cx="12" cy="12" r="10" fill="none" />
          <line x1="9" y1="9" x2="9" y2="9" stroke="rgb(234, 179, 8)" />
          <line x1="15" y1="9" x2="15" y2="9" stroke="rgb(234, 179, 8)" />
          <path d="M16,15 L8,15" opacity=".9" stroke="rgb(234, 179, 8)" />
        </svg>
      </div>

      <div @click="setMood('happy')" class="mood-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(34, 197, 94)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Happy Face</title>
          <circle cx="12" cy="12" r="10" fill="none" />
          <circle cx="9" cy="9" r="0.4" fill="rgb(34, 197, 94)" />
          <circle cx="15" cy="9" r="0.4" fill="rgb(34, 197, 94)" />
          <path d="M8 15c1 1 4 4 8 -0.3" stroke="rgb(34, 197, 94)" />
        </svg>
      </div>

    </div>

    <div class="mood-board">
      <h5>Mood Board</h5>
      <div class="selected">
        <div
          v-for="mood in ['unhappy', 'neutral', 'happy']"
          :key="mood"
          :style="{
            opacity: mood === selectedMood ? 1 : 0.5,
            transform: mood === selectedMood ? 'scale(0.7)' : 'scale(0.3)',
            transition: 'opacity 0.3s, transform 0.3s',
            margin: '0 5px'
          }"
        >

          <template v-if="mood === 'unhappy'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(239, 68, 68)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <circle cx="9" cy="9" r="0.4" fill="rgb(239, 68, 68)" />
              <circle cx="15" cy="9" r="0.4" fill="rgb(239, 68, 68)" />
              <path d="M8 15c2 -2 6 -2 8 0" stroke="rgb(239, 68, 68)" />
            </svg>
          </template>

          <template v-else-if="mood === 'neutral'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(234, 179, 8)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <line x1="9" y1="9" x2="9" y2="9" stroke="rgb(234, 179, 8)" />
              <line x1="15" y1="9" x2="15" y2="9" stroke="rgb(234, 179, 8)" />
              <path d="M16,15 L8,15" opacity=".9" stroke="rgb(234, 179, 8)" />
            </svg>
          </template>

          <template v-else-if="mood === 'happy'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(34, 197, 94)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <circle cx="9" cy="9" r="0.4" fill="rgb(34, 197, 94)" />
              <circle cx="15" cy="9" r="0.4" fill="rgb(34, 197, 94)" />
              <path d="M8 15c1 1 4 4 8 -0.3" stroke="rgb(34, 197, 94)" />
            </svg>
          </template>

        </div>
      </div>
      <div class="mood-fill" :style="moodStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommitRight',
  data() {
    return {
      selectedMood: this.getMoodFromLocalStorage() || null,
    };
  },
  computed: {
    moodStyle() {
      switch (this.selectedMood) {
        case 'happy':
          return { width: '100%', backgroundColor: 'rgb(59, 130, 246)' };
        case 'neutral':
          return { width: '66%', backgroundColor: 'rgb(59, 130, 246)' };
        case 'unhappy':
          return { width: '33%', backgroundColor: 'rgb(59, 130, 246)' };
        default:
          return { width: '0%', backgroundColor: 'transparent' };
      }
    },
  },
  methods: {
    setMood(selectedMood) {
      this.selectedMood = selectedMood;
      this.setMoodInLocalStorage(selectedMood);
    },
    setMoodInLocalStorage(mood) {
      localStorage.setItem('selectedMood', mood);
    },
    getMoodFromLocalStorage() {
      return localStorage.getItem('selectedMood');
    },
  },
};
</script>

<style scoped>
.experience {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
}
h2 {
  font-weight: 700;
}
.mood {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}
.mood-item {
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.mood-item:hover {
  background-color: rgba(0, 119, 255, 0.151);
}
.mood-board {
  width: 100%;
  max-width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.selected {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
}
.mood-fill {
  height: 8px;
  border-radius: 20px;
  transition: width 0.5s ease-in-out;
}

@media all and ( max-width: 768px ) {
    .experience {
      width: 100%;
    }
  }

</style>
