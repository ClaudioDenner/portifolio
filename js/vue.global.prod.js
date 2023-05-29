import itemsProjetos from "./itemsProjetos.js"
import babySteps from "./BabySteps.js"








const { createApp } = Vue


createApp({
    data() {
      return {
        menu:[
          {active:true},
          {active:false},
          {active:false},
          {active:false},
        ],
        menuMobile:{active:false},
        projects: itemsProjetos.itemsProjetos.reverse(),
        steps:babySteps.babySteps.reverse()
      }
    },

    methods: {
      toggleActive: function(i){

          this.menu.forEach(element => {
            element.active = false
          });
         this.menu[i].active = !this.menu[i].active
      },
      showMenuMobile: function(){
        this.menuMobile.active = !this.menuMobile.active
        //console.log(this.menuMobile.active)
        let ulMenuMobile = document.querySelector('.nav-fixed ul')
        this.menuMobile.active ? ulMenuMobile.style.display = 'flex' : ulMenuMobile.style.display = 'none'
      
      }
    }
      
    
    
     
    
  }).mount('#app')

