export default {
  template: `
      <div class="wrapper">
        <button @click="showMessage()">
          <slot />
        </button>
      </div>
    `,
  props: {
    message: {
      type: String,
      default: 'Hello'
    }
  },
  data() {
    return {
      btnText: 'Clik Me'
    }
  },
  methods: {
    showMessage() {
      alert(this.message)
    }
  }
}