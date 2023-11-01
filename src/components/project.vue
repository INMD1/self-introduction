<template >
    <!-- 기본색상 -->
    <div class="d_article" style="background: #557B83">
            <div class="row py-deit">
                <h1 class="ME">My Projects</h1>
                <h5 style="text-align: center; font-weight: Bold;">많은 프로젝트를 해보았지만 대표적인 프로젝트를 보여드리겠습니다</h5>
            </div>
            <div class="row ">
                <div class="col-lg-8 col-xl-8">
                    <div class="animate__animated animate__fadeIn " v-if="image == 0"><img src="../assets/img/DoD_데시보드.svg" class="center"></div>
                    <div class="animate__animated animate__fadeIn" v-else-if="image == 1"><img src="../assets/img/Server-DashBoard.svg" class="center"></div>
                    <div class="animate__animated animate__fadeIn" v-else> <img src="../assets/img/Deu_Food_gui.svg" class="center-2"></div>
                </div>
                 <div class="col-lg-6 col-xl-4 py-4 card">
                    <div class="card-header">
                        <div class="card-header-tabs nav nav-tabs" id="nav-tab" role="tablist">
                            <button v-on:click="this.image = 0"
                            class="nav-link active" id="tab1" data-bs-toggle="tab" 
                            data-bs-target="#main" type="button" role="tab" 
                            aria-controls="main" aria-selected="true">DoD_DashBoard</button>

                            <button  v-on:click="this.image = 1"
                            class="nav-link" id="tab2" data-bs-toggle="tab"
                            data-bs-target="#serBoard" type="button" role="tab"
                            aria-controls="serBoard" aria-selected="false">Server-DashBoard</button>

                            <button v-on:click="this.image = 2"
                            class="nav-link" id="tab3" data-bs-toggle="tab"
                            data-bs-target="#widget" type="button" role="tab"
                            aria-controls="widget" aria-selected="false">school-Food-Widget</button>
                        </div>
                    </div>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="tab1">
                            <div class="card card_t" >
                                <div class="card_body Tab_card">
                                    <h2 class="card-title py-1" style="font-weight: Bold;">🤔What is  DoD_DashBoard?</h2>
                                    <p class="card-text">
                                        이 프로젝트는 휴학생때 학교 동아리방에 동아리원들이 학교 소식을 한꺼번에 볼수 있게 하기위해 만든 프로젝트입니다.
                                    </p>
                                    <h3 style="font-weight: Bold;">⚙️기능</h3>
                                    <p>학교에서 나오는 공지, 식단공지 제공<br>
                                    닐씨 제공<br>
                                    주기적으로 정보업데이트<br>
                                    유튜브 라이브를 이용해서 음악제공</p>
                                    <a href="https://github.com/asw-dod/DoD_DashBoard" class="btn btn-secondary"><i class="bi bi-github"></i> 레포 방문</a>
                                </div>
                            </div>                
                        </div>
                        <div class="tab-pane fade" id="serBoard" role="tabpanel" aria-labelledby="tab2">
                            <div class="card card_t" >
                                <div class="card_body Tab_card">
                                    <h2 class="card-title py-1" style="font-weight: Bold;">🤔What is  Server-DashBoard</h2>
                                    <p class="card-text">
                                        이 프로젝트는 서버를 관리할때 서버의 자원 활용률을 보기위해서 만든 프로젝트입니다.
                                    </p>
                                    <h3 style="font-weight: Bold;">⚙️기능</h3>
                                    <p>CPU,Ram,Network 모니터링 제공</p>
                                    <div class="d-grid gap-2 d-lg-flex justify-content-lg-end">
                                        <a href="https://github.com/INlg1/server-dashboard" class="btn btn-secondary"><i class="bi bi-github"></i> 레포 방문</a>
                                        <a href="https://github.com/INlg1/server-dashboard/releases" class="btn" style="background-color: #79dfc1;">사용해보기</a>                                   
                                    </div>                                
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="widget" role="tabpanel" aria-labelledby="tab3">
                            <div class="card card_t" >
                                <div class="card_body Tab_card">
                                    <h2 class="card-title py-1" style="font-weight: Bold;">🤔What is school-Food-Widget</h2>
                                    <p class="card-text">
                                        이 프로젝트는 학교에서 학식을 볼때 앱을 들어가서 봐야한다는 불편함 때문에 만든 프로젝트입니다.
                                    </p>
                                    <h3 style="font-weight: Bold;">⚙️기능</h3>
                                    <p>위젯들 통해 앱 바로가기 학식식단 정보 제공<br>
                                    앱 메인 페이지는 웹뷰로 DoD-dashboard 모바일 버전으로 제공</p>
                                    <div class="d-grid gap-2 d-lg-flex justify-content-lg-end">
                                        <a href="https://github.com/INlg1/deu_food_gui" class="btn btn-secondary"><i class="bi bi-github"></i> 레포 방문</a>
                                        <a href="https://github.com/INlg1/deu_food_gui/releases" class="btn" style="background-color: #79dfc1;">사용해보기</a>                                   
                                    </div>
                                </div>
                            </div> 
                        </div>                       
                    </div>
                </div>               
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            image : 0
        }
    },
    method: {
    }
}
</script>