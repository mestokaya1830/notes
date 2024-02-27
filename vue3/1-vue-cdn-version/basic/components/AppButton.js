export default {
    template: `
      <div class="wrapper">
        <button @click="showMessage()">
          <slot />
        </button>
      </div>
    `,
    data () {
      return {
        btnText:'Clik Me'
      }
    },
    methods:{
      showMessage(){
        alert('Component Slot')
      }
    }
}