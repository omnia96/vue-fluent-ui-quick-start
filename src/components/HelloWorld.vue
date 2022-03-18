<template>
  <div class="hello">
    <fluent-card>
      <h1>{{ msg }}</h1>
      <fluent-button appearance="accent" @click="showMessage">{{msg}}</fluent-button>
      <fluent-text-field placeholder="Enter your name" v-model="name"></fluent-text-field>
    </fluent-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    showMessage() {
      alert(`Hello ${this.name}`);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
