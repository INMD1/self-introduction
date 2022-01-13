<template>
  <header>
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top navigation-clean"
      style="background-color: rgba(255, 255, 255, 0.3);"
    >
      <div class="container">
        <a class="navbar-brand title" href="#">INMD1</a
        ><button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-2" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about" style="color: var(--bs-black)"
                >about</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill" style="color: var(--bs-black)"
                >skill</a
              >
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link" href="#project" style="color: var(--bs-black)"
                >project</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <article style="  background: linear-gradient(to right, #eacda3, #d6ae7b);">
    <div class="py-5 h-100 align-items-center d-flex">
      <div class="hero mx-auto">
          <img :src="require('./assets/img/20220113_200043.webp')">
          <p class="hello">Hello world</p>
          <p class="hello_body">여러분들을 만나서 반가워요. 저에 대해서 한번 알아보까요?</p>
      </div>
    </div>
  </article>
  <article id="about"><about /></article>
  <article id="skill" style="background: var(--bs-green)"><skill /></article>
  <article id="project"><project /></article>

  <footer class="footer-basic py-3">
    <div class="social"></div>
    <p class="text-center">
      이 사이트는 포트폴리오 사이트를 목적으로 제작이 되었서요!
    </p>
    <p class="copyright">Company Name © 2022</p>
  </footer>
  
</template>

<script>
import about from "./components/about.vue";
import skill from "./components/skill.vue";
import project from "./components/project.vue";
import  gsap from "gsap";
export default {
  name: "App",
  components: {
    about,
    skill,
    project,
  },
  mounted(){
    //불규칙한 애니메이션 수정하기
       let tl = gsap.timeline();
       tl.fromTo('.hero', 1, {height: "0vh"} , {height: "60vh", ease: 'Power2.easeInOut'})
         .fromTo('.hero', 1.2, { width: '100%'}, { width: '80%',  ease: 'Power2.easeInOut'})
          .fromTo('.hello', 2, { opacity: 0 } , { opacity: 1 },  "-=0.5")
         .fromTo('.hello_body', 2, { opacity: 0, x: 30 } , { opacity: 1, x: 30 },  "-=0.5")
  }
};
</script>