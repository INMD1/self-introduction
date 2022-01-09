<template>
    <header>
        <nav class="navbar navbar-light navbar-expand-lg fixed-top navigation-clean" style="background: rgba(255,255,255,0);">
            <div class="container"><a class="navbar-brand" href="#" style="color: var(--bs-white);">INMD1</a><button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div id="navcol-2" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link active" href="#" style="color: var(--bs-white);">intro</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-white);">about</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-white);">skill</a></li>
                        <li class="nav-item"></li>
                        <li class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-white);">project</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <article style="background: var(--bs-gray-700);">
        <div class="py-5 h-100 align-items-center text-center d-flex img-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-xl-5 mx-auto">
                        <h1 class="py-4" style="color: rgb(255,255,255);font-size: 75px;">Hello world</h1>
                        <p style="font-size: 23px;color: rgb(255,255,255);">인녕하세요. 저를 한번 알아보려 가볼까요?</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <article><about/></article>
    <article style="background: var(--bs-green);"><skill/></article>  
    <article><project/></article>

    <footer class="footer-basic py-3">
        <div class="social"></div>
        <p class="text-center">이 사이트는 포트폴리오 사이트를 목적으로 제작이 되었서요!</p>
        <p class="copyright">Company Name © 2022</p>
    </footer>
    
</template>

<script>
import about from "./components/about.vue"
import skill from "./components/skill.vue"
import project from "./components/project.vue"
export default {
  name: 'App',
  components : {
    about,
    skill,
    project
  }

}
</script>
