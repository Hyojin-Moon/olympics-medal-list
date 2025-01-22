/* eslint-disable react/prop-types */
import { useState } from 'react';
import "../../App.css";
import MedalList from './MedalList';

function MedalForm()  {

   // ** 기본 상태 관리 **
  const [data, setData] = useState({
    nation: '',
    gold: '',
    silver: '',
    bronze: '',
  });

  // ** 국가리스트 상태 관리 **
  const [nations, setNations] = useState([]);
  
  
  // ** 입력값 설정 **
  const handleInputChange = (e) => {

    const { id, value } = e.target;
    //메달 input은 0이상의 숫자만 허용
    if ((id === 'gold' || id === 'silver' || id === 'bronze') && (isNaN(value) || value < 0)) {
      return;
    }
    // 계산된 속성 이름 (Computed Property Name) id 변수의 키값을 동적으로 가져옴
    setData({ ...data, [id]: value });
  }

  // ** 국가추가 핸들러를 설정 **
  const handleSubmit = (e) => {
    e.preventDefault();

    setNations([...nations, data]); //상태 업데이트

    //초기화
    setData({
      nation: '',
      gold: '',
      silver: '',
      bronze: '',
    });
  }

  // ** 업데이트 **

  // ** 삭제 **

  return (
    <>
      <div className='main-container'>
        <nav className='navbar'>
          <h1>2025 Olympics</h1>
        </nav>

        <form className='input-section' onSubmit={handleSubmit} >
          {/* 입력 섹션 */}
          <div className="input-group">
            <p>국가명</p>
            <input type="text" id="nation" placeholder="국가 입력" onChange={handleInputChange} value={data.nation} />
          </div>
          <div className="input-group" >
            <p>금메달</p>
            <input type="text" id="gold" onChange={handleInputChange} value={data.gold} />
          </div>
          <div className="input-group">
            <p>은메달</p>
            <input type="text" id="silver" onChange={handleInputChange} value={data.silver} />
          </div>
          <div className="input-group">
            <p>동메달</p>
            <input type="text" id="bronze" onChange={handleInputChange} value={data.bronze} />
          </div>
          {/* 버튼 섹션 */}
          <div className='button-section'>
            <input type='submit' id='addbtn' value="국가 추가" />
            <input type="submit" id='updatebtn' value="업데이트" />
          </div>
        </form>
        <MedalList nations={nations} />
        </div>

    </>
  )
}

export default MedalForm;