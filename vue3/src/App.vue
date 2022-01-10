<template>
  <header>
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top navigation-clean"
      style="background: rgba(255, 255, 255, 0)"
    >
      <div class="container">
        <a class="navbar-brand" href="#" style="color: var(--bs-white)">INMD1</a
        ><button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-2"
        >
          <span class="visually-hidden">Toggle navigation</span
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
    <div class="py-5 h-100 align-items-center text-center d-flex img-fluid">
        <div class="container-fluid"><img class="hero" :src="require('./assets/img/lenstravelier-EdhmOmzBdoI-unsplash.jpg')" /></div>
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
      let tl = gsap.timeline();
      tl.fromTo('.hero',1, {height: "0px"} , {height: "700px", ease: 'Power2.easeInOut'})
  }
};
</script>
