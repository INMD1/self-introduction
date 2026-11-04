> 더많은 내용을 보고 싶으면  [깃허브 페이지](https://github.com/INMD1/Opnestack_Dloud-Dashboard)에 들어가서 봐주세요!

# DCloud Infra Dashboard

**한 줄 소개**: OpenStack 기반 클라우드 인프라를 사용자가 직접 생성하고 관리할 수 있도록 만든 웹 대시보드입니다. Next.js 16과 React 19로 구축했으며, [Skyline API Server Extension](https://github.com/INMD1/skyline-apiserver-extenstion)과 연동해 동작합니다.

## 시스템 구성 (System Architecture)
대시보드는 사용자 화면과 클라우드 인프라 사이에서 요청을 중계하는 프론트엔드 + BFF(Backend For Frontend) 구조로 설계되었습니다.

* **UI Layer:** Next.js App Router 기반의 콘솔 화면(대시보드, 인스턴스, 네트워크, 스토리지, 공지사항)을 제공합니다.
* **API Routes Layer:** Next.js API Routes에서 인증 확인, 입력 검증, 오류 처리를 담당하고 Skyline 확장 API로 요청을 전달합니다.
* **Auth Layer:** NextAuth.js 기반 로그인과 SSO(Authentik) 연동으로 사용자를 인증하고, 토큰 만료 시 자동으로 세션을 정리합니다.
* **Data Layer:** Drizzle ORM과 libSQL(SQLite)로 공지사항, 인스턴스 메타데이터, 사용자 설정 등 대시보드 자체 데이터를 저장합니다.
* **External Services:** OpenStack Skyline 확장 API(Nova, Cinder, Neutron)와 포트포워딩 Proxy API를 호출합니다. API 호출은 `openapi-fetch`로 타입을 보장합니다.

## 주요 기능 (Features)

### 1. 대시보드 및 공지사항
* CPU, 메모리, 디스크 사용량을 실시간으로 추적합니다.
* 프로젝트별 할당량(Quota)과 사용량을 차트로 시각화합니다.
* 프로젝트 내 모든 활동을 타임라인 형태의 활동 로그로 보여줍니다.
* 관리자가 작성한 시스템 공지와 업데이트 내역을 확인할 수 있습니다.

### 2. 인스턴스 관리
* 다양한 Flavor와 이미지로 VM을 생성하고 시작, 중지, 재시작 등 상태를 제어합니다.
* 생성한 인스턴스의 OS 등 메타데이터를 보존해 상세 화면에 표시합니다.
* NoVNC를 통해 브라우저에서 바로 콘솔에 접속할 수 있습니다.
* 이름 중복 방지 로직과 **확인 → 작업 중 → 완료**의 3단계 워크플로로 생성/삭제 과정을 안전하게 처리합니다.

### 3. 네트워크 및 보안
* VM 생성 시 SSH(22번 포트) 포워딩 규칙을 자동으로 설정합니다.
* 외부망에서 인스턴스 내부의 지정 포트로 접근할 수 있는 동적 포트포워딩 규칙을 제공합니다.
* 보안 그룹 제어로 포트포워딩 VM 간 통신을 분리하고 격리합니다.
* Sticky IP 스케줄링으로 최적의 Floating IP를 자동 선택하며, 공유 Floating IP 설정에 의존하던 로직을 분리해 안정성을 높였습니다.

### 4. 스토리지 관리
* 추가 데이터 디스크(볼륨)를 생성하고 인스턴스에 연결/분리(핫플러그)할 수 있습니다.
* 볼륨 스냅샷과 크기 조정 기능을 제공합니다.

### 5. 인증 및 권한
* SSO(Single Sign-On) 통합 로그인과 Authentik 사용자 자동 생성을 지원합니다.
* 인증/토큰 오류 발생 시 자동으로 로그인 화면으로 리디렉트합니다.
* 프로젝트별 자원 접근 권한(Role)을 검사하고 개인용 SSH 키페어를 지원합니다.

## 기술 스택 (Tech Stack)

| 구분 | 사용 기술 |
| --- | --- |
| Framework | Next.js 16.1.6 (App Router, Turbopack), React 19.2.4, TypeScript 5 |
| UI | shadcn/ui (Radix UI 1.4.3), Chakra UI 3.33.0, Tailwind CSS 4.2.1 |
| Chart | Recharts 3.7.0, Chart.js 4.5.1, ApexCharts 5.6.0 |
| Form · Validation | React Hook Form 7.71.2, Zod 4.3.6 |
| Auth | NextAuth.js 4.24.13, Authentik SSO |
| Database | Drizzle ORM 0.45.1, Drizzle Kit 0.31.9, libSQL Client 0.17.0 (SQLite) |
| API | openapi-fetch 0.17.0 (OpenAPI 타입 기반), Skyline API Server Extension |
| Tooling | Node.js 20+, Yarn, ESLint 10 |

## 프로젝트 구조 (Structure)

```text
Opnestack_Dloud-Dashboard/
├── drizzle/          # DB 마이그레이션
├── src/
│   ├── app/
│   │   ├── api/      # 백엔드 API Routes (v1)
│   │   ├── auth/     # 로그인 (SSO 포함)
│   │   └── console/  # 대시보드 / 공지사항 / 인스턴스 화면
│   ├── components/   # 공통 UI 컴포넌트
│   └── lib/          # API, DB, NextAuth 설정
└── public/
```
