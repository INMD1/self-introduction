export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    repositoryUrl: string;
    category: string;
    icon: string;
    cover: string;
    section: 'Projects' | 'Infra Cloud' | 'Research';
    status: string;
    date?: string;
    author?: string;
    highlight?: string;
    highlightLabel?: string;
}

export const projects: Project[] = [
    {
        "id": "openstack-dashboard",
        "title": "Opnestack_Dloud-Dashboard",
        "description": "OpenStack 기반 클라우드 자원을 사용자가 생성하고 관리할 수 있도록 돕는 대시보드입니다.",
        "tags": [
            "React",
            "SQLite",
            "MySQL"
        ],
        "repositoryUrl": "https://github.com/INMD1/Opnestack_Dloud-Dashboard",
        "category": "Cloud Infrastructure",
        "icon": "☁️",
        "cover": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2068&h=600&fit=crop",
        "section": "Infra Cloud",
        "status": "Published",
        "author": "INMD1"
    },
    {
        "id": "skylineex",
        "title": "skyline-apiserver-extenstion",
        "description": "OpenStack Skyline을 확장해 DCloud 대시보드와 클라우드 인프라 사이의 요청을 처리하는 백엔드입니다.",
        "tags": [
            "Python",
            "MySQL"
        ],
        "repositoryUrl": "https://github.com/INMD1/skyline-apiserver-extenstion",
        "category": "Cloud Infrastructure",
        "icon": "☁️",
        "cover": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2068&h=600&fit=crop",
        "section": "Infra Cloud",
        "status": "Published",
        "author": "INMD1",
        "date": "2025.07.10"
    },
    {
        "id": "aswdcp",
        "title": "D Cloud Platform",
        "description": "Proxmox API를 연결해 가상 서버 신청과 승인, 자원 관리를 지원하는 클라우드 플랫폼입니다.",
        "tags": [
            "React",
            "PHP",
            "MySQL"
        ],
        "repositoryUrl": "https://github.com/INMD1-Repo/D-Cloud-platform",
        "category": "Cloud Infrastructure",
        "icon": "☁️",
        "cover": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2068&h=600&fit=crop",
        "section": "Infra Cloud",
        "status": "Published",
        "author": "INMD1",
        "date": "2024.01.15"
    },
    {
        "id": "ASW-PSMT",
        "title": "ASW-PSMT",
        "description": "D Cloud Platform을 응용해 학교 실습 시스템과 서버 자원을 관리하는 교육 플랫폼입니다.",
        "tags": [
            "React",
            "PHP",
            "MySQL"
        ],
        "repositoryUrl": "https://github.com/INMD1/ASW-PSMT",
        "category": "Education Platform",
        "icon": "🎓",
        "cover": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2068&h=600&fit=crop",
        "section": "Projects",
        "status": "Published",
        "author": "INMD1",
        "date": "2024.03.20"
    },
    {
        "id": "APSU",
        "title": "APSU",
        "description": "군대에서 유동 병력의 식사 인원을 확인하고 관리하는 PWA 유틸리티입니다.",
        "tags": [
            "Vue",
            "Strapi",
            "MySQL",
            "PWA"
        ],
        "repositoryUrl": "https://github.com/INMD1-Repo/APSU",
        "category": "Utility / PWA",
        "icon": "📱",
        "cover": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=2068&h=600&fit=crop",
        "section": "Projects",
        "status": "Published",
        "author": "INMD1",
        "date": "2023.11.10"
    },
    {
        "id": "SADP-Docker",
        "title": "SADP-Docker",
        "description": "Coolify를 기반으로 연구용 앱의 내부 서버 배포와 계정·권한·취약점·로그 관리를 연결한 플랫폼입니다.",
        "tags": [
            "Laravel",
            "Livewire",
            "Docker",
            "OIDC"
        ],
        "repositoryUrl": "https://github.com/KREONET/PASED",
        "category": "Deployment Platform",
        "icon": "🚀",
        "cover": "/images/project-cover.svg",
        "section": "Projects",
        "status": "기능 구현",
        "highlight": "기관 계정 로그인 · 배포 전 취약점 검사 · 팀별 접근 제어",
        "highlightLabel": "핵심 구현"
    },
    {
        "id": "CLAW",
        "title": "CLAW",
        "description": "차량 이동에 따른 Wi-Fi·5G와 유선망의 상태 변화를 재현하고 하나의 실험 기록으로 수집합니다.",
        "tags": [
            "Python",
            "FastAPI",
            "Containerlab",
            "SQLite"
        ],
        "repositoryUrl": "https://github.com/INMD1-Repo/CLAW",
        "category": "Network Testbed",
        "icon": "📡",
        "cover": "/images/project-cover.svg",
        "section": "Projects",
        "status": "프로토타입",
        "highlight": "4개 실험 시나리오 · 로컬 저장과 장애 후 재전송",
        "highlightLabel": "핵심 구현"
    },
    {
        "id": "CLAW_GUI",
        "title": "CLAW_GUI",
        "description": "네트워크 구성을 그림과 YAML로 편집하고 여러 실험 서버를 웹·데스크톱에서 관리하는 앱입니다.",
        "tags": [
            "React",
            "TypeScript",
            "Fastify",
            "Electron"
        ],
        "repositoryUrl": "https://github.com/INMD1-Repo/CLAW_GUI",
        "category": "Network Tooling",
        "icon": "🕸️",
        "cover": "/images/project-cover.svg",
        "section": "Projects",
        "status": "기능 구현",
        "highlight": "웹·데스크톱 공통 화면 · 다중 서버 · 실시간 상태",
        "highlightLabel": "핵심 구현"
    },
    {
        "id": "Cisco-UCS-KVM",
        "title": "Cisco-UCS-KVM",
        "description": "구형 Cisco 서버의 Java 원격 콘솔을 최신 Linux와 브라우저에서 사용할 수 있도록 돕는 실행기입니다.",
        "tags": [
            "Python",
            "Java 8",
            "Docker",
            "noVNC"
        ],
        "repositoryUrl": "https://igit.kreonet.net/grey-serval/Cisco-UCS-KVM",
        "category": "Legacy Infrastructure",
        "icon": "🖥️",
        "cover": "/images/project-cover.svg",
        "section": "Infra Cloud",
        "status": "기능 구현",
        "highlight": "원본 JAR 보존 · 실행 프로세스에 한정한 호환 처리",
        "highlightLabel": "핵심 구현"
    },
    {
        "id": "IPMI-Mgr",
        "title": "IPMI-Mgr",
        "description": "서버 관리 주소와 자산 정보, IP 할당 상태, 구형 원격 콘솔을 한 화면에서 관리하는 운영 도구입니다.",
        "tags": [
            "Python",
            "FastAPI",
            "dnsmasq",
            "Docker"
        ],
        "repositoryUrl": "https://igit.kreonet.net/grey-serval/IPMI-Mgr",
        "category": "Infrastructure Operations",
        "icon": "🗂️",
        "cover": "/images/project-cover.svg",
        "section": "Infra Cloud",
        "status": "기능 구현",
        "highlight": "자산·DHCP 통합 관리 · Dell·Cisco KVM 4종",
        "highlightLabel": "핵심 구현"
    },
    {
        "id": "hwpkit",
        "title": "HWPKit",
        "description": "한글·Word·Markdown·HTML 문서를 공통 구조로 읽고 다른 형식으로 저장하는 TypeScript 라이브러리입니다.",
        "tags": [
            "TypeScript",
            "Node.js",
            "Document Conversion"
        ],
        "repositoryUrl": "https://github.com/INMD1/hwpkit",
        "category": "Document Engineering",
        "icon": "📄",
        "cover": "/images/project-cover.svg",
        "section": "Projects",
        "status": "개발·검증",
        "highlight": "237개 원본의 1,185건 생성·재읽기 성공 (2026.09)",
        "highlightLabel": "보관된 검증 기록"
    },
    {
        "id": "mirror-disk-health",
        "title": "mirror-disk-health",
        "description": "미러 서버 디스크의 건강 상태와 오류·수명·사용량을 자동 수집해 대시보드로 보여주는 모니터링 도구입니다.",
        "tags": [
            "Python",
            "Telegraf",
            "InfluxDB",
            "Grafana"
        ],
        "repositoryUrl": "https://github.com/INMD1/mirror-disk-health",
        "category": "Observability",
        "icon": "💽",
        "cover": "/images/project-cover.svg",
        "section": "Projects",
        "status": "기능 구현",
        "highlight": "SMART 5분 · I/O 30초 주기 수집",
        "highlightLabel": "기본 설정"
    },
    {
        "id": "hwpkit_research",
        "title": "hwpkit_research",
        "description": "문서 변환 결과를 정답과 비교하고, AI 수정안을 검증하거나 복원하면서 변환 코드를 개선하는 연구 시스템입니다.",
        "tags": [
            "Python",
            "LangGraph",
            "Ollama",
            "TypeScript"
        ],
        "repositoryUrl": "https://github.com/INMD1/hwpkit_research",
        "category": "Conversion Research",
        "icon": "🔬",
        "cover": "/images/project-cover.svg",
        "section": "Research",
        "status": "연구·검증",
        "highlight": "6개 보호 지표 · 수정 전후 검증 · 품질 회귀 시 복원",
        "highlightLabel": "검증 구조"
    },
    {
        "id": "hwpkit_research-Lora",
        "title": "hwpkit_research-Lora",
        "description": "검증된 문서 변환 수정 사례로 AI를 추가 학습하고, 기능 평가를 통과한 후보 모델을 사용하는 연구 파이프라인입니다.",
        "tags": [
            "Python",
            "LoRA",
            "Unsloth",
            "Ollama"
        ],
        "repositoryUrl": "https://github.com/INMD1/hwpkit_research",
        "category": "Model Training Research",
        "icon": "🧠",
        "cover": "/images/project-cover.svg",
        "section": "Research",
        "status": "연구·검증",
        "highlight": "검증 궤적 기반 학습 자료 · 데이터 누수 검사 · 후보 평가",
        "highlightLabel": "연구 범위"
    }
];

export const projectNavigationSections = ['Projects', 'Infra Cloud', 'Research'].map(title => ({
    title,
    items: projects
        .filter(project => project.section === title)
        .map(project => ({
            label: project.title,
            href: `/projects/${project.id}`,
            icon: project.icon,
        })),
}));
