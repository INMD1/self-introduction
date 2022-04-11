<template >
    <!-- 기본색상 -->
    <div class="d_article" style="background: #D9D7F1">
            <div class="row py-deit">
                <h1 style="font-weight: bold; font-size: 70px;">Projects</h1>
                <p>여기 있는 프로젝트들은 제가 기억에 남는 프로젝트들을 한번 적어보았습니다</p>
            </div>
            <!-- Tabs를 넣어서 선택시 색이 바뀌게 이벤트 발생시키기 -->
            <div class="row">
                <div class="col-md-6 col-xl-8">
                     <img src="../assets/img/DoD_데시보드.png" class="img1 Tab_img">
                </div>
                 <div class="col-md-6 col-xl-4">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">DoD_DashBoard</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="card">
                                <div class="card_body Tab_card">
                                    <h2 class="card-title py-1" style="font-weight: Bold;">DoD_DashBoard</h2>
                                    <p class="card-text">이 프로젝트는 휴학생때 학교 동아리방에 동아리원들이 학교 소식을 한꺼번에 볼수 있게 하기위해 만든 프로젝트입니다.</p>

                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>                
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                </div>               
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>