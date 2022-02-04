<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" v-bind:style="{background: topcolor, transition: 'all ease 0.3s 0s' }">
    <div class="container">
      <a class="navbar-brand title" href="#">INMD1</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav">
        <a class="nav-item nav-link menu" href="#home">Home</a>
        <a class="nav-item nav-link menu" href="#about">About</a>
        <a class="nav-item nav-link menu" href="#skill">Skill</a>
        <a class="nav-item nav-link menu" href="#project">project</a>
      </div>
      </div>
    </div>
  </nav>
  <article id="home" style="background-color: #C4D4F2;">
    <div class="py-5 h-100 align-items-center text-center d-flex img-fluid">
      <div class="container">
          <div class="row">
              <div class="col">
                  <p class="title_B">안녕하세요,</p>
                  <p class="title_B">저는 <span style="color: #22577E;">INMD1</span> 이고</p>
                  <p class="title_B"><span style="color: #064635;">개발자</span>를 <span style="color: #1572A1;">꿈꾸는 </span>사람 입니다.</p>
              </div>
              <div class="col-lg-5"><img class="rounded-circle" src="https://avatars.githubusercontent.com/u/87979171?v=4" style="width: 30vh; filter: drop-shadow(5px 5px 5px #000);" /></div>
          </div>
      </div>
    </div>
  </article>
  <article id="about"><about /></article>
  <article id="skill" style="background: #87A7B3"><skill /></article>
  <article id="project" style="background: #435560"><project /></article>
  
  <footer padless>
    <div class="col-12 py-2">
       <p class="menu" style="text-align: center;">이 사이트는 포트폴리오 용도로 제작 되었습니다.</p>
       <p class="menu" style="text-align: center;">Web Made with <span style="color: #e25555">❤</span> by INMD1</p>
    </div>
  </footer>
</template>

<script>
import about from "./components/about.vue";
import skill from "./components/skill.vue";
import project from "./components/project.vue";

export default {
  name: "App",
  components: {
    about,
    skill,
    project,
  },
  data() {
    return {
      topcolor: "#00ff0000",
      scrollPostion: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if(window.pageYOffset < 5){
        this.topcolor = "#00ff0000"
      }else if(window.pageYOffset > 5){
        this.topcolor = "white"
      }
    }
  }
};
</script>