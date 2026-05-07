> 더많은 내용을 보고 싶으면  [깃허브 페이지](https://github.com/INMD1/skyline-apiserver-extenstion)에 들어가서 봐주세요!

# Skyline API Server Extension

**한 줄 소개**: OpenStack Skyline을 기반으로 DCloud 플랫폼의 요구사항에 맞게 인스턴스 자동화, 외부 Proxy 기반 포트포워딩, 모니터링 기능을 확장한 FastAPI 기반의 고성능 백엔드 서버입니다.

## 시스템 아키텍처 (System Architecture)
본 시스템은 클라이언트(UI)와 클라우드 인프라(OpenStack) 사이에서 비즈니스 로직을 처리하는 미들웨어 역할을 수행하며, 다음과 같은 계층 구조로 설계되었습니다.

* **API Layer (프레임워크):** `FastAPI`와 `Gunicorn`/`Uvicorn`을 활용하여 고성능 비동기 API 엔드포인트를 제공합니다.
* **Auth Layer (인증 및 보안):** OpenStack Keystone 토큰 시스템과 연동되는 JWT 기반의 인증 미들웨어를 거쳐 요청의 유효성을 검증합니다.
* **Business Logic Layer (핵심 로직):** 인스턴스 제어, 볼륨 관리, 포트포워딩 설정, 성능 메트릭 조회 등의 핵심 도메인 로직을 처리합니다.
* **External Services Layer (외부 연동):**
    * **OpenStack Services:** Nova(컴퓨팅), Cinder(볼륨), Neutron(네트워크) 모듈과 통신하여 클라우드 자원을 제어합니다.
    * **Proxy VM API:** 기존 Floating IP 방식 대신, 외부 Proxy VM과 HTTP로 직접 통신하여 포트포워딩을 제어합니다.
    * **Prometheus:** 시스템 및 인스턴스의 성능 메트릭을 수집합니다.

## 작동 방식 및 핵심 로직 (How It Works)

### 1. 인스턴스 프로비저닝 및 자동화 파이프라인
단순한 서버 생성을 넘어, 사용자가 즉시 사용할 수 있는 환경을 한 번에 구성합니다.
* 인스턴스(VM) 생성 요청 시, 백엔드에서 서버 생성과 동시에 블록 스토리지(볼륨)를 자동 생성 및 연결합니다.
* 생성이 완료되면 외부 Proxy API 서버를 호출하여 **SSH(22번 포트) 포트포워딩 규칙을 자동으로 구성**하여 즉각적인 접근을 보장합니다.
* 또한 인스턴스를 삭제할 때 연결된 포트포워딩 규칙까지 함께 자동으로 정리하여 고립된 리소스(리크) 발생을 방지합니다.

### 2. 외부 API 기반 포트포워딩 (핵심 확장 기능)
기존 OpenStack 환경의 Floating IP 의존성을 낮추고 유연성을 높였습니다.
* `POST /api/v1/portforward` 등 전용 API 라우터를 통해 외부 포트포워딩 서비스와 통신합니다.
* 공유 Floating IP를 직접 할당하던 방식에서 벗어나, 구성 파일(`skyline.yaml`)에 정의된 외부 API(`portforward_api_url`)의 인증 키를 활용하여 프록시 서버에 직접 라우팅 규칙을 생성하고 관리합니다.

### 3. 끊김 없는 JWT 인증 시스템
세션 유지와 보안을 동시에 충족하는 인증 파이프라인을 구축했습니다.
* Keystone 인증을 통과하면 JWT 토큰을 발급하여 쿠키에 저장합니다.
* FastAPI 미들웨어(`validate_token`)가 모든 HTTP 요청을 가로채어 토큰을 검증합니다.
* 사용자 편의성을 위해 토큰 만료 시간과 현재 시간을 비교하고, 갱신 기준 시간(1800초) 이내일 경우 자동으로 토큰을 갱신(Renew)하여 응답 헤더에 담아 반환합니다.

### 4. 관제 및 운영 효율화
* 사용자의 모든 활동(생성, 삭제, 상태 변경 등)을 시스템 데이터베이스에 **한국어 활동 로그**로 기록하여 운영 관리의 직관성을 높였습니다.
* Prometheus 쿼리 연동 엔드포인트(`/api/v1/query`, `/api/v1/query_range`)를 자체 API 안에 내장하여 대시보드에서 성능 데이터를 즉시 조회할 수 있습니다.

## 기술 스택 (Tech Stack)

* **Language & Framework:** Python 3.8+, FastAPI (v0.128.0)
* **Database & ORM:** SQLAlchemy (v2.0.45), Alembic, MySQL/SQLite
* **Cloud & Infrastructure:** OpenStack SDK (Nova, Cinder, Neutron client)
* **Auth & Security:** python-jose (JWT), cryptography, Keystone
* **Monitoring:** Prometheus, psutil