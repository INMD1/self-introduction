<template>
            <div class="h-100 r d-flex align-items-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col py-5">
                        <h1 style="color: var(--bs-gray-100);font-weight: bold;font-size: 81px;">Project</h1>
                        <p style="color: rgb(255,255,255);font-size: 23px;">제가 만들 프로젝트 들이에요. 한번 보고가는건 어때요?</p>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-md-8">
                        <div class="row row-cols-2">
                            <div class="col">
                                <div class="card cardd">
                                    <div class="card-body">
                                        <a v-bind:href="this.repo_data[0].link" style="color: black;"><h4><i class="bi bi-journal-bookmark"></i>  {{ this.repo_data[0].repo }} </h4></a>
                                        <p>{{ this.repo_data[0].description }}</p>
                                        <div class="row">
                                            <div class="col">
                                                 <p class="mb-0 f6 color-fg-muted">
                                                     <span class="d-inline-block mr-3">
                                                        <span>언어:</span>
                                                        <span>ㅤ{{ this.repo_data[0].language }}</span>
                                                    </span>
                                                 </p>
                                            </div>
                                            <div class="col">
                                                <p><i class="bi bi-star-fill"></i> stars: {{this.repo_data[0].stars}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card cardd">
                                    <div class="card-body">
                                        <a v-bind:href="this.repo_data[1].link" style="color: black;"><h4><i class="bi bi-journal-bookmark"></i>  {{ this.repo_data[1].repo }} </h4></a>
                                        <p>{{ this.repo_data[1].description }}</p>
                                        <div class="row">
                                            <div class="col">
                                                 <p class="mb-0 f6 color-fg-muted">
                                                     <span class="d-inline-block mr-3">
                                                        <span>언어:</span>
                                                        <span>ㅤ{{ this.repo_data[1].language }}</span>
                                                    </span>
                                                 </p>
                                            </div>
                                            <div class="col">
                                                <p><i class="bi bi-star-fill"></i> stars: {{this.repo_data[1].stars}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col py-2">
                                <div class="card cardd">
                                    <div class="card-body">
                                        <a v-bind:href="this.repo_data[2].link" style="color: black;"><h4><i class="bi bi-journal-bookmark"></i>  {{ this.repo_data[2].repo }} </h4></a>
                                        <p>{{ this.repo_data[2].description }}</p>
                                        <div class="row">
                                            <div class="col">
                                                 <p class="mb-0 f6 color-fg-muted">
                                                     <span class="d-inline-block mr-3">
                                                        <span>언어:</span>
                                                        <span>ㅤ{{ this.repo_data[2].language }}</span>
                                                    </span>
                                                 </p>
                                            </div>
                                            <div class="col">
                                                <p><i class="bi bi-star-fill"></i> stars: {{this.repo_data[2].stars}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card cardd">
                                    <div class="card-body">
                                        <a v-bind:href="this.repo_data[3].link" style="color: black;"><h4><i class="bi bi-journal-bookmark"></i>  {{ this.repo_data[3].repo }} </h4></a>
                                        <p>{{ this.repo_data[3].description }}</p>
                                        <div class="row">
                                            <div class="col">
                                                 <p class="mb-0 f6 color-fg-muted">
                                                     <span class="d-inline-block mr-3">
                                                        <span>언어:</span>
                                                        <span>ㅤ{{ this.repo_data[3].language }}</span>
                                                    </span>
                                                 </p>
                                            </div>
                                            <div class="col">
                                                <p><i class="bi bi-star-fill"></i> stars: {{this.repo_data[3].stars}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="height: 364px;">
                            <div class="card-header">
                                <h5 class="mb-0">지금까지 만든 프로젝트</h5>
                            </div>
                            <div class="card-body" style="overflow:scroll;">
                                <div class="col py-2 " v-for="item in all_data" :key="item"> 
                                        <a v-bind:href="item.svn_url" style="color: black;"><h4><i class="bi bi-journal-bookmark"> </i>  {{ item.name }} </h4></a>
                                        <p>{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            repo_data : [{"owner":"INMD1","repo":"DoD_app_vue_container","link":"https://github.com/asw-dod/dod_app_vue","description":"모바일 전용웹","language":"Vue","stars":2,"forks":0},
                         {"owner":"INMD1","repo":"Deu_food_api","link":"https://github.com/asw-dod/Deu_food_api","description":"동의대 기숙사, 학식 정보를 가공해서 보여주는 APi 입니다.","language":"JavaScript","stars":0,"forks":0},
                         {"owner":"INMD1","repo":"DoD_DashBoard ","link":"https://github.com/asw-dod/DoD_DashBoard","description":"학교 공지사항이나 기타 정보를 한번에 보여줌니다.","language":"Vue","stars":0,"forks":0},
                         {"owner":"INMD1","repo":"deu_food_gui","link":"https://github.com/INMD1/deu_food_gui","description":"학교앱의 불편한 부분을 직접 만들어서 씀","language":"Kotlin","stars":0,"forks":0}],
            color_data: [],
            all_data: [],
        }
    },
    async mounted() {
        const all_repo = await axios.get("https://api.github.com/users/INMD1/repos");
        this.all_data = all_repo.data; 
    }
}
</script>