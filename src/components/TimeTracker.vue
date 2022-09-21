<template>
  <div class="justify-center flex bg-extra-ligh-grey items-center h-screen">
    <div v-if="!loading" class="flex items-center py-2 px-6 bg-ligh-grey/20 rounded-full shadow-md">
      <p class="text-xs mr-2">04:20:21</p>
      <p class="text-xs mr-2 text-black/20">/ 04:20:21</p>
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
import { getStatus } from '../utils/api.js'
import DropdownMenu from './DropdownMenu.vue'

export default {
  name: 'App',
  components: {
    DropdownMenu
  },
  data() {
    return {
      loading: true,
      myEmployer: {},
      workStatus: ''
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
      console.log('entro en boton')
      this.workStatus = 'online'
    },
    checkOut () {
      this.workStatus = 'offline'
    },
    pause () {
      this.workStatus = 'offline'
    }
  },
};
</script>