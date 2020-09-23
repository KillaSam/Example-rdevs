<template>
    <table class="one-calendar">
        <thead>            
            <tr>
                <td class="arrow" @click="prevMonth()">‹</td>
                <td colspan="5" class="name-month">
                    <span id="month-cal">{{this.$store.state.month[currMonth]}}</span> 
                    {{currYear}}
                </td>
                <td class="arrow" @click="nextMonth()">›</td>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td v-for="day in firstWeek" 
                    :class="day.disabled ? disDay : trueDay"
                    :key="day.id" 
                    @click="clickDate"
                    >
                    {{day.numOfMonth}}
                </td>
            </tr>
            <tr>
                <td class="day"
                    v-for="day in secondWeek" 
                    :key="day.id" 
                    @click="clickDate"
                    >
                    {{day.numOfMonth}}
                </td>
            </tr>
            <tr>
                <td class="day"
                    v-for="day in thirdWeek" 
                    :key="day.id" 
                    @click="clickDate"
                >
                    {{day.numOfMonth}}
                </td>
            </tr>
            <tr>
                <td class="day"
                    v-for="day in fourthWeek" 
                    :key="day.id" 
                    @click="clickDate"
                    >
                    {{day.numOfMonth}}
                </td>
            </tr>
            <tr>
                <td v-for="day in fifthWeek" 
                    :class="day.disabled ? disDay : trueDay"
                    :key="day.id" 
                    @click="clickDate"
                    > 
                    {{day.numOfMonth}}
                </td>
            </tr>
            <tr> 
                <td v-for="day in sixWeek" 
                    :class="day.disabled ? disDay : trueDay"
                    :key="day.id" 
                    @click="clickDate"
                    >
                    {{day.numOfMonth}}
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>S</td>
                <td>M</td>
                <td>T</td>
                <td>W</td>
                <td>T</td>
                <td>F</td>
                <td>S</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: 'Calendar',
    data(){
        return {
            currDate: new Date(),
            currMonth: 0,
            currYear: 0,
            countDaysInMonth: 0,
            dayFirst: 0,
            dayLast: 0,
            arrDayInMonth: [],
            firstWeek: [],
            secondWeek: [],
            thirdWeek: [],
            fourthWeek: [],
            fifthWeek: [],
            sixWeek: [],
            trueDay: 'day',
            disDay: 'day1'
        }
    },
    mounted(){
        this.currMonth = this.currDate.getMonth();
        this.currYear = this.currDate.getFullYear();
        this.showMonth();
    },
    methods: {
        showMonth(){
            this.arrDayInMonth = []; 
            this.firstWeek = [];
            this.secondWeek = []; 
            this.thirdWeek  = [];
            this.fourthWeek = [];
            this.fifthWeek = [];
            this.sixWeek = [];
            this.countDaysInMonth = new Date(this.currYear, this.currMonth+1, 0).getDate();
            this.dayLast = new Date(this.currYear, this.currMonth, this.countDaysInMonth).getDay();
            this.dayFirst = new Date(this.currYear, this.currMonth, 1).getDay();

            for(let i = 1; i<=this.countDaysInMonth; i++){
                this.arrDayInMonth.push(i);
            }
            const lastMonthDays = new Date(this.currYear, this.currMonth, 0).getDate();
            if(this.dayFirst>1){
                for(let i = 1; i<=this.dayFirst; i++){
                    this.firstWeek.push({
                        id: i-this.dayFirst, 
                        numOfMonth: lastMonthDays-(this.dayFirst-i), 
                        disabled: true
                    });
                }
                for(let j = 1; j<=7-this.dayFirst; j++){
                    this.firstWeek.push({id: j, numOfMonth: j, disabled: false});
                    this.arrDayInMonth.shift();
                }
            } else {
                for(let i = 1; i <= 7; i++){
                    this.firstWeek.push({id: i, numOfMonth: i, disabled: false});
                    this.arrDayInMonth.shift();
                }
            }
            for(let j=1; j<=21; j++){
                if(this.secondWeek.length<7){
                    this.secondWeek.push({
                        id: this.arrDayInMonth[0], 
                        numOfMonth: this.arrDayInMonth[0], 
                        disabled: false
                    });
                    this.arrDayInMonth.shift();
                } else if(this.thirdWeek.length<7){
                    this.thirdWeek.push({
                        id: this.arrDayInMonth[0], 
                        numOfMonth: this.arrDayInMonth[0], 
                        disabled: false
                    });
                    this.arrDayInMonth.shift();
                } else {
                    this.fourthWeek.push({
                        id: this.arrDayInMonth[0], 
                        numOfMonth: this.arrDayInMonth[0], 
                        disabled: false
                    });
                    this.arrDayInMonth.shift();
                }
            }        
            let nextDays = 1;            
            const atLEAST = this.arrDayInMonth.length;
            if(this.arrDayInMonth.length<=7){
                if(this.arrDayInMonth.length !== 0){
                    for(let x = 1; x<=atLEAST; x++){                        
                        this.fifthWeek.push({
                            id: this.arrDayInMonth[0], 
                            numOfMonth: this.arrDayInMonth[0], 
                            disabled: false
                        });
                        this.arrDayInMonth.shift();
                    }
                }
                while(this.fifthWeek.length !== 7){
                    this.fifthWeek.push({
                            id: this.countDaysInMonth+nextDays, 
                            numOfMonth: nextDays, 
                            disabled: true
                    });
                    nextDays++
                    this.arrDayInMonth.shift();
                }
                for(let i = 1; i<=7; i++){
                    this.sixWeek.push({
                            id: this.countDaysInMonth+nextDays, 
                            numOfMonth: nextDays, 
                            disabled: true
                    });
                    nextDays++
                }
            } else {
                for(let i = 1; i<=atLEAST; i++){
                    if(this.fifthWeek.length<7){
                        this.fifthWeek.push({
                            id: this.arrDayInMonth[0], 
                            numOfMonth: this.arrDayInMonth[0],
                            disabled: false
                        });
                        this.arrDayInMonth.shift();
                    } else {
                        this.sixWeek.push({
                            id: this.arrDayInMonth[0], 
                            numOfMonth: this.arrDayInMonth[0],
                            disabled: false
                        });
                        this.arrDayInMonth.shift();                        
                    }
                }
                while(this.sixWeek.length !== 7){
                    this.sixWeek.push({
                        id: this.countDaysInMonth+nextDays, 
                        numOfMonth: nextDays,
                        disabled: true
                    });
                    nextDays++;
                }
            }                   
        },
        nextMonth(){
            if(this.currMonth !== 11)this.currMonth += 1;
            else {
                this.currMonth = 0;
                this.currYear +=1;     
            }
            this.showMonth();
        },
        prevMonth(){
            if(this.currMonth !== 0)this.currMonth -= 1;
            else {
                this.currMonth = 11;
                this.currYear -=1;     
            }            
            this.showMonth();
        }, 
        clickDate(e){
            if(e.target.className === 'day'){
                this.$store.commit('showModal');
                this.$store.commit('changeDate', new Date(this.currYear, this.currMonth, e.target.innerHTML));
            }
        }
    }
}
</script>