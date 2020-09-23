<template>
  <main class="main-content">
    <div class="description">
      <div class="description-wrapper">
        <p class="description-title">
          Choose the day <br> for the meeting
        </p>
        <p class="description-context">
          We encourage you to book your<br>
          appointment online. <br>
          This will save you time.
        </p>
      </div>
    </div>
    <div class="calendar">
      <Calendar />
    </div>
    <ModalWindow v-if="this.$store.state.isModalVisible" 
                 />    
  </main>
</template>

<script>
import ModalWindow from './ModalWindow.vue';
import Calendar from './Calendar.vue';

export default {  
  name: 'MainContent',
  components: {
    ModalWindow,
    Calendar
  },
  data() {
    return {
      
    }
  }
}
</script>
