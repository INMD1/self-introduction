<template>
  <header>
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top navigation-clean"
      style="background: rgba(255, 255, 255, 0)"
    >
      <div class="container">
        <a class="navbar-brand" href="#" style="color: var(--bs-white);  font-size: 30px;">INMD1</a
        ><button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-2"
        >
          <span class="visually-hidden" >Toggle navigation</span
          ><span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-2" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#" style="color: var(--bs-white)"
                >intro</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: var(--bs-white)"
                >about</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: var(--bs-white)"
                >skill</a
              >
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: var(--bs-white)"
                >project</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <article style="background-image: linear-gradient(to right, #cc7412, #f4a11d)">
    <div class="py-5 h-100 align-items-center d-flex ">
      <div class="hero mx-auto">
          <img :src="require('./assets/img/lenstravelier-EdhmOmzBdoI-unsplash.jpg')">
          <h1 class="hello">Hello world</h1>
      </div>
    </div>
  </article>
  <article><about /></article>
  <article style="background: var(--bs-green)"><skill /></article>
  <article><project /></article>

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
       tl.fromTo('.hero', 1, {height: "0%"} , {height: "60%", ease: 'Power2.easeInOut'})
         .fromTo('.hero', 1.2, { width: '100%'}, { width: '80%',  ease: 'Power2.easeInOut'})
  }
};
</script>
