import { useState } from 'react'
import './App.css'

function App() {

  // 기본 상태를 관리할 useState 훅을 사용해 초기 상태를 설정
  const [data, setData] = useState({
    nation: '',
    gold: '',
    silver: '',
    bronze: '',
  });
  const [nations, setNations] = useState([]); //map사용을 위해 배열로 초기값 지정


  const handleInputChange = (e) => {

    const { id, value } = e.target;
    //메달 input은 0이상의 숫자만 허용
    if ((id === 'gold' || id === 'silver' || id === 'bronze') && (isNaN(value) || value < 0)) {
      return;
    }
    // 계산된 속성 이름 (Computed Property Name) id 변수의 키값을 동적으로 가져옴
    setData({ ...data, [id]: value });
  }

  //이벤트 핸들러를 설정
  const handleSubmit = (e) => {
    e.preventDefault();

    setNations([...nations, data]) //추가될 리스트 

    //초기화
    setData({
      nation: '',
      gold: '',
      silver: '',
      bronze: '',
    });
  }
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

        {/* 국가리스트 추가 */}
        <div className='nations-list'>
          {nations.length > 0 && (
            <>
              {/* 헤더 */}
              <div className='nations-header'>
                <p>국가명</p>
                <p>금메달</p>
                <p>은메달</p>
                <p>동메달</p>
                <p>액션</p>
              </div>
              {/* 리스트 */}
              {nations.map((nation, index) => (
                <div key={index} className='nations-item'>
                  <p>{nation.nation}</p>
                  <p>{nation.gold}</p>
                  <p>{nation.silver}</p>
                  <p>{nation.bronze}</p>
                  <button id='deletebtn'>삭제</button>
                </div>
              ))}
            </>
          )}
          {nations.length === 0 && <h4>현재 추가된 국가가 없습니다.</h4>}
        </div>
      </div>
    </>
  )
}

export default App;
