/* eslint-disable react/prop-types */
import { useState } from 'react';
import "../../App.css";
import MedalList from './MedalList';

function MedalForm()  {

// ** 로컬 스토리지 초기값 **
  const savedData = JSON.parse(localStorage.getItem('nations')) || [];

// ** 기본 상태 관리 **
  const [data, setData] = useState({
    nation: '',
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  
// ** 국가리스트 상태 관리 **
  const [nations, setNations] = useState(savedData);

// ** 국가리스트 정렬 관리 **
  const [sortOption , setSortOption] = useState("gold");
  

// ** 입력값 설정 **
  const handleInputChange = (e) => {

    const { id, value } = e.target;
    
    //국가 이름 공백 체크
    if (id === 'nation' && value.trim() === " ") {
      return;
    }

    //메달 input은 0이상의 숫자만 허용
    if ((id === 'gold' || id === 'silver' || id === 'bronze') && (isNaN(value) || value < 0)) {
      return;
    }
    
    // 계산된 속성 이름 (Computed Property Name) id 변수의 키값을 동적으로 가져옴
    setData({ ...data, [id]: id === 'nation' ? value : Number(value)});
    
  }



// ** 국가추가 핸들러 **
  const handleSubmit = (e) => {
    e.preventDefault();


    // 국가 이름 공백 체크
    if (data.nation.trim() === "") {
      alert("국가 이름은 공백일 수 없습니다.");
      return;
    }

    // 중복 체크
    if(nations.some((e) => e.nation === data.nation)) {
      alert ("이미 입력된 국가 입니다.");
      return;
    }

    // 정렬
    const sortedNations = [...nations, data].sort((a, b) => {
        return b.gold - a.gold;
      }) 

    
    setNations(sortedNations);

    //로컬스토리지 저장
    localStorage.setItem('nations', JSON.stringify(sortedNations));

    //초기화
    setData({
      nation: '',
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  }


// ** 업데이트 핸들러**  nations 배열을 활용
  const handleUpdate = (e) => {
    e.preventDefault();


    // 국가 이름 공백 체크
    if (data.nation.trim() === "") {
      alert("국가 이름은 공백일 수 없습니다.");
      return;
    }

    // 중복 체크
    if(!nations.some((e) => e.nation === data.nation)) {
      alert ("업데이트 할 국가가 없습니다.");
      return;
    }

    const updatedNations = nations.map((item) => {
      if(item.nation === data.nation) {
        return {
          nation: data.nation,
          gold: data.gold,
          silver: data.silver,
          bronze: data.bronze,
        };
      }
      return item;
    })
    setNations(updatedNations);

    //로컬스토리지 저장
    localStorage.setItem('nations', JSON.stringify(updatedNations));

    //초기화
    setData({
      nation: '',
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  }

// ** 정렬 옵션 핸들러 **
  const handleSort = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    const sortedNations = [...nations].sort((a, b) => {
      if(selectedOption === 'gold') {
        return b.gold - a.gold;
      } else {
        return (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze);
      }
    })

    setNations(sortedNations);
  }

  return (
    <>
      <div className='main-container'>
        <nav className='navbar'>
          <h1>2025 Olympics</h1>
        </nav>

        {/* 정렬 기준 섹션 */}
        <div className='sort-option'>
            <label>
              <input type="radio" value="gold" onChange={handleSort} checked={sortOption === 'gold'}/>
              금메달 기준 정렬
            </label>
            <label>
              <input type="radio" value="total" onChange={handleSort} checked={sortOption === 'total'}/>
              총 메달 기준 정렬
            </label>
          </div>

        <form className='input-section'>
          {/* 입력 섹션 */}
          <div className="input-group">
            <p>국가명</p>
            <input type="text" id="nation" placeholder="국가 입력" onChange={handleInputChange} value={data.nation} />
          </div>
          <div className="input-group" >
            <p>금메달</p>
            <input type="number" id="gold" onChange={handleInputChange} value={data.gold} />
          </div>
          <div className="input-group">
            <p>은메달</p>
            <input type="number" id="silver" onChange={handleInputChange} value={data.silver} />
          </div>
          <div className="input-group">
            <p>동메달</p>
            <input type="number" id="bronze" onChange={handleInputChange} value={data.bronze} />
          </div>

          {/* 버튼 섹션 */}
          <div className='button-section'>
            <input type='submit' id='addbtn' value="국가 추가" onClick={handleSubmit}/>
            <input type="button" id='updatebtn' value="업데이트" onClick={handleUpdate}/>
          </div>
        </form>
        <MedalList nations={nations} setNations={setNations} />
        </div>

    </>
  )
}

export default MedalForm;