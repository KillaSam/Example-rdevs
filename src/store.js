import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        modalDate: new Date(),
        isModalVisible: false,
        month: [
            'January', 'February',
            'March', 'April', 'May', 
            'June', 'July', 'August',
            'September', 'October', 'November',
            'December'
        ],
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday', 
            'Saturday',
            'Sunday'
        ]
    },
    mutations: {
        showModal(state){
            state.isModalVisible = !state.isModalVisible;
        },
        changeDate(state, date){
            state.modalDate = date;
        }
    }
  });

  export default store;