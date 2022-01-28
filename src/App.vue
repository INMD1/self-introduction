<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top navigation-clean" style="background-color: #00ff0000">
      <div class="container">
        <a class="navbar-brand title" href="#">INMD1</a>
        <div id="navcol-2" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about" style="color: var(--bs-black)">
                about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill" style="color: var(--bs-black)">
                skill</a>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link" href="#project" style="color: var(--bs-black)">
                project</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <article style="background: linear-gradient(to right, #eacda3, #d6ae7b);">

  </article>
  <!-- <article id="about"><about /></article>
  <article id="skill" style="background: var(--bs-green)"><skill /></article>
  <article id="project"><project /></article> -->

  <v-footer padless>
    <v-col class="text-center" cols="12">
      Web Made with <span style="color: #e25555">❤</span> by INMD1
    </v-col>
  </v-footer>
</template>

<script>
// import about from "./components/about.vue";
// import skill from "./components/skill.vue";
// import project from "./components/project.vue";

export default {
  name: "App",
  // components: {
  //   about,
  //   skill,
  //   project,
  // },
  data() {
    return {
      
    }
  },
  method: {
    
  }
};
</script>