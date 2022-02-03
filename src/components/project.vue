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
                                                        <span class="repo-language-color" v-bind:style="{ backgroundColor: this.color_data[0] }"></span>
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
                                                        <span class="repo-language-color" v-bind:style="{ backgroundColor: this.color_data[1] }"></span>
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
                                                        <span class="repo-language-color" v-bind:style="{ backgroundColor: this.color_data[2] }"></span>
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
                                                        <span class="repo-language-color" v-bind:style="{ backgroundColor: this.color_data[3] }"></span>
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
                    <div class="col-md-4">
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
            repo_data : [{"owner":"NULL","repo":"NULL","link":"NULL","description":"NULL","language":"NULL","stars":0,"forks":0},
                         {"owner":"NULL","repo":"NULL","link":"NULL","description":"NULL","language":"NULL","stars":0,"forks":0},
                         {"owner":"NULL","repo":"NULL","link":"NULL","description":"NULL","language":"NULL","stars":0,"forks":0},
                         {"owner":"NULL","repo":"NULL","link":"NULL","description":"NULL","language":"NULL","stars":0,"forks":0}],
            color_data: [],
            all_data: [],
            all_color_data: []
        }
    },
    async mounted() {

        const pinned_repo = await axios.get("https://gh-pinned-repos.egoist.sh/?username=INMD1");
        const lang_color = await axios.get("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json");
        const all_repo = await axios.get("https://api.github.com/users/INMD1/repos");
        this.repo_data = pinned_repo.data;
        this.all_data = all_repo.data;
        
        for (let data = 0; data < Object.keys(pinned_repo.data).length; data++) {
             this.color_data[data] = lang_color.data[`${pinned_repo.data[data].language }`].color
        }

        console.log(this.color_data);
    }
}
</script>