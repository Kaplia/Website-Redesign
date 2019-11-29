<template>
  <div id="app">
    <Project msg=""/>
  </div>
</template>

<script>
import Project from './components/Project.vue'
import project from './components/project.css'

export default {
  name: 'app',
  components: {
    Project,
    project
  }
}
</script>

<style>

</style>
