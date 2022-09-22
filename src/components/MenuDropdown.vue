<template>
  <div class="flex relative">
    <button @click="openMenu" id="dropdownDefault" class="font-medium text-sm px-4 py-2.5 text-center inline-flex items-center text-extra-dark-gray">{{this.firstName + ' ' + this.lastName}} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <!-- Dropdown menu -->
    <div v-show="isMenuOpen" class="absolute top-12 right-6 z-10 w-44 bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700">
      <ul class="text-center py-1 text-sm text-gray-700 dark:text-gray-200 divide-y divide-black-200" aria-labelledby="dropdownDefault">
        <li class="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <button @click="openSecondaryMenu" class="inline-flex py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="absolute left-0 ml-2 w-4 h-4 bi bi-chevron-left"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
            <!-- <svg class="absolute left-0 ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> -->
            Mis cuentas
          </button>
          <div v-show="isSecondaryMenuOpen" class="absolute top-0 -left-64 z-10 w-60 bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="text-center py-1 text-sm text-gray-700 dark:text-gray-200 divide-y divide-black-200" aria-labelledby="dropdownDefault">
              <li class="p-2 flex justify-around">
                <div class="grid place-items-center border-2 border-gray-600/50 rounded-full h-8 w-8 bg-dark-white">S1</div>
                <div>
                  <p><span class="font-bold">Sesame 1 </span>{{this.firstName + ' ' + this.lastName}}</p>
                  <p class="font-extralight">Hoy llevas 00:00:00</p>
                </div>
              </li>
              <li class="p-2 flex justify-around">
                <div class="grid place-items-center border-2 border-gray-500/50 rounded-full h-8 w-8 bg-dark-white">S1</div>
                <div>
                  <p><span class="font-bold">Sesame 2 </span>{{this.firstName + ' ' + this.lastName}}</p>
                  <p class="font-extralight">Hoy llevas 00:00:00</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Vista empleado</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mi perfil</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'MenuDropdown',
  data() {
    return {
      isMenuOpen: false,
      isSecondaryMenuOpen: false
    }
  },
  methods: {
    openMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    openSecondaryMenu () {
      this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen
    }
  },
  props: {
    firstName: String,
    lastName: String
  },
}
</script>
