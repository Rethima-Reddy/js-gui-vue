const mul = (x, y) => { return x * y }

const mult = new Vue({
  el: '#mult',
  data: {
    first: 7,
    second: 5
  },
  computed: {
    multiplicate: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The multiplication value is ${mul(i, j)}.`
    }
  }
}) 