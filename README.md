# 🥇 Olympic Medal Tracker  


![Gold Medal Sorting Demo](https://github.com/Hyojin-Moon/olympics-medal-list/blob/main/src/assets/01.gif)   
![Total Medal Sorting Demo](https://github.com/Hyojin-Moon/olympics-medal-list/blob/main/src/assets/02.gif)  

---

## 📝 프로젝트 소개  
올림픽 메달 집계는 국가별 메달 데이터를 관리하고 금메달 및 총메달 기준으로 정렬할 수 있는 웹 애플리케이션입니다. CRUD 기능을 지원하며, 사용자 친화적인 UI로 데이터를 쉽게 확인하고 조작할 수 있습니다.

---

## 💡 기능 소개  

### 🥇 1. 금메달 기준 정렬  
- 금메달 수에 따라 내림차순으로 국가 목록을 정렬합니다.  
- 기본 정렬 기준으로 설정되어 있습니다.  

### 🥈 2. 총메달 기준 정렬  
- 금, 은, 동메달의 합계로 국가 목록을 내림차순 정렬합니다.  
- 사용자가 **정렬 옵션**에서 선택할 수 있습니다.  

### ➕ 3. 국가 추가  
- 새로운 국가와 메달 데이터를 입력하여 목록에 추가합니다.  
- **중복 체크**: 동일한 국가가 이미 목록에 있으면 경고 메시지를 표시합니다.  

### 🖊️ 4. 메달 데이터 수정  
- 기존 국가의 메달 데이터를 수정할 수 있습니다.  

### ❌ 5. 국가 삭제  
- 선택한 국가를 목록에서 삭제할 수 있습니다.  

### 🌟 6. 사용자 친화적인 인터페이스  
- 직관적인 정렬 옵션 및 데이터 입력 UI를 제공합니다.  
- 사용성을 고려한 반응형 디자인을 지원합니다.  

---

## 🛠️ 트러블슈팅
- 데이터 정렬 중 발생한 문제와 해결 방법을 아래 블로그에서 확인할 수 있습니다:
🔗 트러블슈팅: 정렬 로직 수정하기
(https://velog.io/@6776ff/React-CRUD-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85%EC%A0%95%EB%A0%AC%EC%9D%B4-%EB%82%B4%EB%A7%98%EB%8C%80%EB%A1%9C-%EC%95%88%EB%8F%BC)

---

## 🛠️ 기술 스택  

### Frontend  
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white) 

---

## 📂 프로젝트 구조  

### 📁 Root Directory  
```plaintext
┣ 📂 assets  
┃ ┗ 📄 01.gif, 02.gif - 시연용 GIF  
┣ 📂 components  
┃ ┣ 📄 MedalForm.js - 국가 데이터 추가 및 정렬 기능 컴포넌트  
┃ ┗ 📄 NationList.js - 국가 리스트 렌더링 컴포넌트  
┣ 📂 styles  
┃ ┗ 📄 styles.css - 전역 스타일 정의  
┣ 📂 utils  
┃ ┗ 📄 validation.js - 중복 체크 및 데이터 검증 함수  
┣ 📄 App.js - 메인 앱 컴포넌트  
┣ 📄 index.js - 진입점 스크립트  
┗ 📄 README.md - 프로젝트 설명  

## 📌 기타 정보
- **Github Repository**: Olympic Medal Tracker