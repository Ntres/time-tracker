<template>
  <div class="justify-center flex bg-extra-ligh-grey items-center h-screen">
    <div v-if="!loading" class="flex items-center py-2 px-6 bg-ligh-grey/20 rounded-full shadow-md">
      <p class="text-xs mr-2">{{ timer ? timer : '00:00:00' }}</p>
      <p class="text-xs mr-2 text-black/20">/ {{countDownTimer ? countDownTimer : '00:00:00'}}</p>
      <button v-if="workStatus === 'offline'" class="text-white text-xs bg-green-btn rounded-full py-2 px-9 mr-2.5" v-on:click="checkIn">ENTRAR</button>
      <button v-if="workStatus === 'online'" class="text-white text-xs bg-ligh-grey rounded-full py-2 px-9 mr-2.5" v-on:click="pause">PAUSA</button>
      <button v-if="workStatus === 'online'" class="text-white text-xs bg-salmon rounded-full py-2 px-9 mr-2.5" v-on:click="checkOut">SALIR</button>
      <div class="-ml-0.5 w-px h-6 bg-gray-600/30 mr-2.5"></div>
      <div class="flex relative">
        <img src="../assets/avatar-user.png" alt="user avatar" class="object-cover h-7 w-7">
        <div class="bg-green-dot h-2 w-2 rounded-full absolute bottom-3 left-6"></div>
      </div>
      <DropdownMenu :firstName="this.myEmployer.employee.firstName" :lastName="this.myEmployer.employee.lastName"/>
    </div>
  </div>
</template>

<script>
import { getStatus, checkIn, checkOut } from '../utils/api.js'
import DropdownMenu from './DropdownMenu.vue'
import { Timer } from 'easytimer.js'

export default {
  name: 'App',
  components: {
    DropdownMenu
  },
  data() {
    return {
      loading: true,
      myEmployer: {},
      workStatus: '',
      aTimer: new Timer(),
      aCountDownTimer: new Timer(),
      timer: '',
      countDownTimer: ''
    }
  },
  mounted () {
    this.callApi()
  },
  methods: {
    callApi () {
      getStatus().then(resp => {
        this.myEmployer = resp.data.data[0]
        this.workStatus = this.myEmployer.employee.workStatus
        this.loading = false
        console.log('myEmployer --> ', this.myEmployer)
      }).catch(err => {
        alert('error', err)
      })
    },
    checkIn () {
      const data = {
        'employeeId': this.myEmployer.employee.id,
        'workEntryIn': {
          'date': new Date(),
          'coordinates': {
            'latitude': 39.9810198,
            'longitude': -0.0292415
          }
        }
      }
      checkIn(data).then( () => {
        this.workStatus = 'online'
        this.InitTimer()
      }).catch(err => {
        alert('error', err)
      })
    },
    checkOut () {
      const data = {
        'employeeId': this.myEmployer.employee.id,
        'workEntryOut': {
          'date': new Date(),
          'coordinates': {
            'latitude': 39.9810198,
            'longitude': -0.0292415
          }
        }
      }
      checkOut(data).then( () => {
        this.workStatus = 'offline'
        this.aTimer.stop()
        this.aCountDownTimer.stop()
        this.timer = '00:00:00'
        this.countDownTimer = '00:00:00'
      }).catch(err => {
        alert('error', err)
      })
    },
    pause () {
      const data = {
        'employeeId': this.myEmployer.employee.id,
        'workEntryOut': {
          'date': new Date(),
          'coordinates': {
            'latitude': 39.9810198,
            'longitude': -0.0292415
          }
        }
      }
      checkOut(data).then( () => {
        this.workStatus = 'offline'
        this.aTimer.pause()
        this.aCountDownTimer.pause()
      }).catch(err => {
        alert('error', err)
      })
    },
    InitTimer () {
      this.aTimer.start({ precision: 'seconds', startValues: { seconds: this.seconds } })
      this.aTimer.addEventListener('secondsUpdated', () => {
        this.timer = this.aTimer.getTimeValues().toString()
      })
      this.aCountDownTimer.start({countdown: true, startValues: {seconds: 28800}})
      this.aCountDownTimer.addEventListener('secondsUpdated', () => {
        this.countDownTimer = this.aCountDownTimer.getTimeValues().toString()
      })
      this.aCountDownTimer.addEventListener('targetAchieved', () => {
          this.countDownTimer = 'Jornada completada'
      })
    }
  },
};
</script>