const subtract = (x, y) => { return x - y }

const subtracter = new Vue({
  el: '#subtracter',
  data: {
    first: 10,
    second: 5
  },
  computed: {
    difference: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The difference is ${subtract(i, j)}.`
    }
  }
})