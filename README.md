https://github.com/Hyojin-Moon/olympics-medal-list/blob/main/src/assets/01.gif
https://github.com/Hyojin-Moon/olympics-medal-list/blob/main/src/assets/02.gif
# 📽️ Movie Explorer Project

## 📝 PROJECT 소개
영화 정보를 제공하는 **Movie Explorer**는 The Movie Database (TMDb) API를 활용하여 인기 영화, 검색 기능, 북마크 저장, 상세 정보 모달 등 다양한 기능을 제공하는 웹 애플리케이션입니다. 사용자 친화적인 UI와 함께 최신 영화 정보를 쉽고 빠르게 확인할 수 있습니다.

## 💡 기능 소개

### 🎬 1. 인기 영화 표시
- **API 데이터 가져오기**: TMDb API에서 현재 인기 영화 데이터를 가져와 메인 페이지에 표시합니다.
- **영화 카드 구성**: 각 영화 카드는 포스터, 제목, 평점을 포함하며, 클릭 시 상세 모달이 열립니다.

### 🔍 2. 검색 기능
- **검색창 입력**: 사용자가 입력한 검색어에 따라 TMDB API를 통해 관련 영화 데이터를 검색합니다.
- **디바운싱 적용**: 검색 요청을 지연 처리하여 API 호출을 최적화합니다.
- **결과 렌더링**: 검색 결과를 영화 카드 형태로 보여줍니다. 결과가 없을 경우 적절한 메시지를 표시합니다.

### 🔖 3. 북마크 기능
- **영화 북마크 추가**: 선택한 영화를 로컬 스토리지에 저장하여 즐겨찾기 목록에 추가합니다.
- **중복 방지**: 이미 북마크된 영화는 추가되지 않도록 처리하며, 사용자에게 알림을 제공합니다.
- **북마크 목록 보기**: 저장된 북마크를 별도의 페이지에서 확인하고 관리할 수 있습니다.
- **북마크 제거**: 찜한 영화의 삭제 시 즉시 화면과 로컬 스토리지에서 반영됩니다.

### 🗂️ 4. 상세 모달
- **영화 카드 클릭**: 사용자가 영화 카드를 클릭하면, 해당 영화의 상세 정보가 포함된 모달이 표시됩니다.
- **모달 구성**: 제목, 포스터, 평점, 줄거리 등의 정보가 포함됩니다.

### 🔄 5. 로고 클릭
- **홈으로 이동**: 로고를 클릭하면 기본 영화 목록 페이지로 이동합니다.

## 트러블슈팅
https://velog.io/@6776ff/React-CRUD-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85%EC%A0%95%EB%A0%AC%EC%9D%B4-%EB%82%B4%EB%A7%98%EB%8C%80%EB%A1%9C-%EC%95%88%EB%8F%BC

## 자료구조

### 📂 Project Root  
┣ 📂 css  
┃ ┗ 📄 styles.css - 프로젝트 전역 스타일을 정의한 파일  
┣ 📂 img  
┃ ┗ 이미지 파일들 저장  
┣ 📂 js  
┃ ┣ 📄 api.js - 외부 API와 통신 로직이 포함된 파일  
┃ ┣ 📄 bookmark.js - 북마크 관련 기능 구현  
┃ ┣ 📄 modal.js - 모달 창 관련 동작 관리  
┃ ┗ 📄 script.js - 메인 스크립트 파일 (전체 흐름 관리)  
┣ 📂 checkList  
┃ ┗ (체크리스트 관련 파일 저장)  
┣ 📄 index.html - 프로젝트의 메인 HTML 파일  
┗ 📄 README.md - 프로젝트 설명과 구조 정보  

## 🛠️ 기술 스택
### Frontend
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 시맨틱 구조와 웹 표준을 준수한 마크업 작성
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 사용자 친화적인 UI 스타일링
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 데이터 처리 및 이벤트 기반 인터랙션 구현
- **TMDB API** 영화 데이터 제공
---

## 📌 기타 정보
- **Github Repository**: [movie-search](#)

