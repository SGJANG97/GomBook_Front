## 준비사항 (OS Window 버전)

1. Node 설치 (https://nodejs.org/en/download/prebuilt-installer)
2. Node 설치 확인<br>
   window powershell(관리자 모드) 실행 > node -v
3. Git 설치 (https://git-scm.com/downloads/win > os에 맞게 설치)
4. VS Code 설치 (https://code.visualstudio.com/ > Download for Windows 클릭)

## Local Project 시작

1. 프로젝트 작업 폴더 만들기<br>
   탐색기 실행 > 작업 폴더 만들기
2. 프로젝트 소스 내려받기<br>
   작업폴더 이동 > 마우스 우클릭 > open Git bash here 선택 > git clone {git 주소}
3. VS Code 실행<br>
   File > Open Folder > 내려받은 git 소스폴더 선택
4. Terminal > new Terminal 또는 Ctrl+Shift+`
5. 프로젝트에 필요한 라이브러리 설치: npm install 또는 npm i
6. 프로젝트 시작: npm run start<br>
   웹 브라우저(크롬, Edge 등등) > 주소창 > http://localhost:3000
7. 프로젝트 빌드: npm run build

## 파일 규칙

1. function: ui component(html)

## GitHub 원격 저장소 추가
1. Git 초기화<br>
   └ git init
2. IntelliJ의 터미널 창을 열고 실행<br>
   └ git remote add origin https://github.com/사용자이름/저장소이름.git (생성된 git URL)
3. 연결 확인<br>
   └ git remoite -v (fetch / push가 나오면 성공)

## branch 설정하기
1. 현재 브랜치 확인<br>
   └ git branch
2. 확인되는 브랜치가 없을 경우<br>
   └ git checkout -b 브랜치명

## 원격 저장소가 있을 경우
1. git에 있는 브랜치 목록 업데이트<br>
   └ git fetch origin
2. 원격 브랜치로 이동<br>
   └ git checkout 브랜치명<br>
2-1. 브랜치가 로컬에 없을 경우<br>
   └ git checkout -b 브랜치명 origin/브랜치명
3. 변경 사항을 추가 및 커밋<br>
   └ git add .<br>
   └ git commit -m "커밋 메시지 내용"
4. 원격 저장소에 push<br>
   └ git push origin 브랜치명<br>
4-1. 충돌이 발생할 경우<br>
   └ git pull origin 브랜치명 --rebase

## 파일 추가 및 커밋
1. 파일 추가<br>
   └ git add .
2. 커밋<br>
   └ git commit -m "커밋 메시지 내용"
3. push<br>
   └ git push -u origin 브랜치명
4. push 후 상태 확인<br>
   └ git branch -r

## 폴더 구조

Project<br>
├─build - _소스 코드를 컴파일하거나 번들링한 결과물들이 저장되는 디렉토리_<br>
├─node-modules - _설치 라이브러리(npm install 하면 생성됨)_<br>
├─public - _웹 애플리케이션의 정적 파일들을 저장하는 디렉토리_<br>
├─src - _소스 코드가 저장되는 디렉토리. 애플리케이션의 주요 로직과 구성 요소 포함. 개발 과정에서 핵심적인 역할_<br>
│ ├─assets - _이미지, 폰트, 스타일 시트, JavaScript 등 정적 자원들 저장_<br>
│ │ ├─css<br>
│ │ ├─fonts<br>
│ │ ├─images<br>
│ ├─components - _재사용 가능한 UI 구성요소들을 저장하는 디렉토리_<br>
│ │ ├─form - _각종 form box_<br>
│ │ ├─modal - _팝업 화면_<br>
│ ├─contents - _body 파일(router(path) 역할)_<br>
│ │ ├─admin - _admin 화면_<br>
│ │ ├─delivery - _delivery 화면_<br>
│ │ └─user - _user 화면_<br>
│ ├─hooks - _custom hooks_<br>
│ ├─layouts - _화면의 header, body, footer 정의_<br>
│ │ ├─admin - _admin layout_<br>
│ │ ├─delivery - _delivery layout_<br>
│ │ ├─user - _user layout_<br>
│ ├─lib<br>
│ │ ├─api - _API 통신(외부 데이터 소스와 상호작용을 처리하는 함수나 클래스)_<br>
│ │ └─store - _상태 관리_<br>
│ ├─models - _데이터 모델 정의_<br>
│ ├─pages - _react router 등을 이용하여 라우팅을 적용할 때 사용할 페이지
컴포넌트들_<br>
│ │ ├─admin - _admin route pages_<br>
│ │ ├─delivery - _delivery route pages_<br>
│ │ └─user - _user route pages_<br>
│ ├─utils - _공통으로 사용하는 함수들_<br>
│ ├─App.tsx - _주요 컴포넌트와 구조를 정의_<br>
│ ├─index.tsx - _애플리케이션의 진입점(Entry Point) 역할_<br>
│ └─routes.tsx - _진입 경로_<br>
├─.env - _환경변수_<br>
├─.prettierrc - _자동 코드 포맷(저장시 반영됨)_<br>
├─package.json - _Node.js 애플리케이션의 메타데이터를 저장하는 중요한 파일로, 애플리케이션의 의존성, 스크립트, 버전 및 기타 설정을 정의_<br>
└─tsconfig.json - _TypeScript 프로젝트의 설정을 정의_<br>

# 주요 라이브러리

1. cookies
2. zustand - store
3. mui - input, chart, grid, accordion .....
   input: https://mui.com/base-ui/react-autocomplete/ <br>
   chart: https://mui.com/x/react-charts/ <br>
   grid: https://mui.com/x/react-data-grid/getting-started/#installation <br>
   accordion: https://mui.com/material-ui/react-accordion/ <br>
   https://codesandbox.io/embed/5t4st8?module=/src/Demo.tsx&fontsize=12 <br>
4. excel, pdf
5. swiper
6. react-color
7. react-datepicker

# 외부 연동

1. 배송조회
2. 알림톡
3. 결제

# server setting

1. nodejs 설치 > node -v
2. local was(tomcat) 설정
   C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\WEB-INF\web.xml<br>
   <welcome-file-list>
   <welcome-file>index.html</welcome-file>
   </welcome-file-list>
   <error-page>
   <error-code>404</error-code>
   <location>/index.html</location>
   </error-page>
   <br>
3. react build - npm run build
4. react 프로젝트 이동 > build 폴더 이동 > 모든내용 복사
5. tomcat9 설치 폴더 이동 > webapps\ROOT 폴더 이동 > react build 복사본 붙여넣기

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
