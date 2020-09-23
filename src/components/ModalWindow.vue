<template>
    <div class="modal-wrapper">
        <aside class="modal-window">
            <button class="closebutton" @click="closeModalWindow()">X</button>
            <div class="modal-main-part">
                <div class="month">
                    <p>Month</p>
                    <input class="modal-input" type="text" :value="modalMonth">
                </div>
                <div class="day">
                    <p>Day</p>
                    <input class="modal-input" type="text" :value="modalDay">
                </div>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    data(){
        return {
            modalMonth: this.$store.state.month[this.$store.state.modalDate.getMonth()],
            modalDay: this.$store.state.modalDate.getDate()+' '+this.$store.state.dayOfWeek[this.$store.state.modalDate.getDay()]
        }
    },
    methods: {
        closeModalWindow(){
            this.$store.commit('showModal');
        }
    }
}
</script>