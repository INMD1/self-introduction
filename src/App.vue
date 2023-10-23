<template>
  <nav class=" navbar navbar-expand-lg fixed-top navbar-light" v-bind:style="{background: topcolor, transition: 'all ease 0.3s 0s' }">
    <div class="container">
      <a class="navbar-brand title" href="#">INMD1</a>
      <button class="navbar-toggler" type="button" @click="clicks = !clicks, whitechange()" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav">
        <a class="nav-item nav-link menu" href="#home">Home</a>
        <a class="nav-item nav-link menu" href="#about">About</a>
        <a class="nav-item nav-link menu" href="#project">project</a>        
        <a class="nav-item nav-link menu" href="#skill">Skill</a>
      </div>
      </div>
    </div>
  </nav>
  <article class="c_article" id="home" style="background-color: #F7F5F2;">
    <div class="py-5 h-100 align-items-center text-center d-flex img-fluid">
      <div class="container">
          <div class="row">
              <div class="col">
                  <p class="title_B">안녕하세요!</p>
                  <p class="title_B">저는 <span style=" color: #7868E6;">INMD1</span> 이고</p>
                  <p class="title_B"><span style="color: #B8B5FF;">백엔드 지식</span>을 가지고 있는</p>
                  <p class="title_B"><span style="color: #8BDB81;">프론트 개발자</span> 입니다.</p>
              </div>
              <!-- <div class="col-lg-5"><img class="rounded-circle" src="https://avatars.githubusercontent.com/u/87979171?v=4" style="width: 30vh; filter: drop-shadow(5px 5px 5px #000);" /></div> -->
          </div>
      </div>
    </div>
  </article>
  <article class="c_article" id="about" style="background: #06113C"><about /></article>
  <article id="project"><project/></article>
  <article class="c_article" id="skill" style="background: #7CD1B8"><skill /></article>
  <article class="l_article" style="background: #9FE6A0"><more/></article>
  <footer style="box-shadow: 6px -4px 5px #368f69; background: #729c72"> 
       <p class="menu py-1" style="text-align: center;">이 사이트는 포트폴리오 용도로 제작 되었습니다.<br>
       Web Made with <span style="color: #e25555">❤</span> by INMD1</p>
  </footer>
</template>

<script>
import about from "./components/about.vue";
import skill from "./components/skill.vue";
import project from "./components/project.vue";
import more from "./components/more.vue";

export default {
  name: "App",
  components: {
    about,
    skill,
    project,
    more
  },
  data() {
    return {
      topcolor: "#00ff0000",
      scrollPostion: 0,
      clicks : false,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    whitechange() {
      if(this.clicks == true){
        this.topcolor = "white"
      }
    },
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