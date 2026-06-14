# Studio235 | Official Store Deployment Guide

이 저장소는 **React 19 + Vite + Tailwind CSS**로 구축된 **Studio235 공식 스토어** 프로젝트입니다. 

기존의 단순 정적 HTML 방식이 아닌 최신 프론트엔드 프레임워크(React) 구조로 만들어져 있기 때문에, 클라우드플레어(Cloudflare Pages)나 깃허브(GitHub)에 배포할 때 몇 가지 설정을 해주셔야 정상적으로 사이트가 동작합니다.

---

## 📂 프로젝트 구조 이해하기 (왜 HTML 파일이 비어있나요?)

Vite 기반 React 앱은 싱글 페이지 애플리케이션(SPA) 구조를 가집니다.
1. `/index.html`은 단지 빈 껍데기(`<div id="root"></div>`)만 가지고 있습니다.
2. 실제 헤더, 네비게이션, 상품 목록, SEO 메타데이터 등의 모든 화면 디자인과 컴포넌트 로직은 `/src/App.tsx`와 `/src/index.css`에 작성되어 있습니다.
3. 빌드 과정(Build)을 거치면 이 TypeScript 코드들이 하나의 완성된 HTML/JS 파일로 컴파일되어 `dist/` 폴더 내에 생성됩니다.

---

## ⚡ 클라우드플레어 페이지 (Cloudflare Pages) 배포 가이드

깃허브(GitHub) 저장소와 클라우드플레어를 연동하신 후, **빌드 설정(Build Settings)** 단계에서 아래 값을 정확히 설정해주셔야 사이트가 정상적으로 표시됩니다.

### 1. 빌드 구성 설정 (Build configuration)

| 설정 항목 | 입력할 값 | 설명 |
| :--- | :--- | :--- |
| **Framework preset (프레임워크 프리셋)** | **Vite** 또는 **None** | Vite를 선택하면 자동으로 아래 값이 설정됩니다. |
| **Build command (빌드 명령어)** | `npm run build` | React 코드를 압축하고 최종 퍼블리싱용 정적 HTML/JS 파일들을 생성하는 명령어입니다. |
| **Build output directory (빌드 출력 디렉터리)** | `dist` | 빌드가 완료된 최종 파일들이 저장되는 폴더 이름입니다. Cloudflare는 이 폴더 안의 파일들을 서비스하게 됩니다. |
| **Root directory (루트 디렉터리)** | *(비워둠 / 기본값)* | 프로젝트의 루트 경로입니다. |

### 2. Node.js 버전 오류가 발생할 경우 (환경 변수 설정)
만약 빌드 중 오류가 나거나 호환성 문제가 생길 경우, Cloudflare Pages 설정의 **Environment variables (환경 변수)** 탭에서 아래 변수를 추가해주세요.
- 변수명 (Variable name): `NODE_VERSION`
- 값 (Value): `20` 또는 `18`

---

## 🚀 깃허브(GitHub)에 코드 업로드하는 방법

AI Studio에서 작업한 코드를 내 깃허브 저장소에 업로드하는 가장 쉽고 빠른 방법입니다.

### 방법 A: AI Studio 내보내기 기능 사용 (가장 추천!)
1. 화면 우측 상단 혹은 설정 메뉴에서 **"Export to GitHub"** (GitHub로 내보내기) 또는 **"Download ZIP"**을 선택합니다.
2. 다운로드한 ZIP 파일의 압축을 풀고, 본인의 GitHub 저장소에 그대로 업로드하거나 커밋(Push)합니다.

### 방법 B: Git 명령어로 직접 올리기
설치된 터미널이나 로컬 PC에서 아래 명령어를 순서대로 실행하여 깃허브 저장소(`https://github.com/gogogossi90-bot/studio235`)에 업로드할 수 있습니다.

```bash
# 1. git 초기화 및 브랜치 설정
git init
git branch -M main

# 2. 모든 파일 추가 및 커밋
git add .
git commit -m "feat: Studio235 스토어 React 스펙 업그레이드 및 하이퍼메가 반팔 SEO JSON-LD 데이터 레이어 적용"

# 3. 내 깃허브 레포지토리 연결
git remote add origin https://github.com/gogogossi90-bot/studio235.git

# 4. 강제 푸시 (기존 코드에 덮어쓰기할 경우) 또는 일반 푸시
git push -u origin main --force
```

---

## 🛠️ 이번 버전 (v1.0.0) 변경 사항 (Changelog)

- **AI SEO 구조화 데이터 레이어 탑재**: `index.html` 헤더 내에 **LD+JSON(schema.org)** 포맷의 상품 정보 데이터를 완벽히 주입했습니다. 네이버/구글 등 AI 검색 봇이 상품 규격, 재질, 핏 스타일을 정확히 해석할 수 있습니다.
- **Vite 빌드 최적화**: Cloudflare Pages 빌드 속도를 높이고 모바일 프레임 드랍을 완벽 차단하기 위해 Tailwind v4 컴파일 속도를 개선했습니다.
- **React 19 구동 안정화**: 비동기 데이터 및 Framer Motion 애니메이션이 모바일 화면과 데스크톱 화면에서 깨짐 없이 렌더링되도록 스타일을 견고하게 보완했습니다.
