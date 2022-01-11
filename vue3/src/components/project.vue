<template>
            <div class="h-100 r d-flex align-items-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col">
                        <h1 style="color: var(--bs-gray-100);font-weight: bold;font-size: 81px;">Project</h1>
                        <p style="color: rgb(255,255,255);font-size: 23px;">제가 만들 프로젝트 들이에요. 한번 보고가는건 어때요?</p>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <h4><i class="fa fa-book"></i>INMD1</h4>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,<br /></p>
                                        <p class="mb-0 f6 color-fg-muted">
                                            <span class="d-inline-block mr-3">
                                                <span class="repo-language-color" style="background-color: #f1e05a"></span>
                                                <span> javascript</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">Heading</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
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

        }
    },
    async mounted() {
        const pinned_repo = await axios.get("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=INMD1");
        console.log(pinned_repo.data)
    }
}
</script>