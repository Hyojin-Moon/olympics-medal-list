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
  console.log(data)

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    //메달 input은 0이상의 숫자만 허용
    if ((id === 'gold' || id === 'silver' || id === 'bronze') && (isNaN(value) || value < 0)) {
      return;
    }
    setData({...data, [id]:value});
  }

  //onSubmit 이벤트 핸들러를 설정
  const handleSubmit = (e) => {
    e.preventDefault();
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

        <form className='input-section' onSubmit={handleSubmit}> {/*onSubmit 사용 form으로*/}

          <div className="input-group">
            <p>국가명</p>
            <input type="text" id="nation" placeholder="국가 입력" onChange={handleInputChange} value={data.nation}/>
          </div>
          <div className="input-group" >
            <p>금메달</p>
            <input type="text" id="gold" onChange={handleInputChange} value={data.gold}/>
          </div>
          <div className="input-group">
            <p>은메달</p>
            <input type="text" id="silver" onChange={handleInputChange} value={data.silver}/>
          </div>
          <div className="input-group">
            <p>동메달</p>
            <input type="text" id="bronze" onChange={handleInputChange} value={data.bronze}/>
          </div>

          <div className='button-section'>
            <input type='submit' id='addbtn' value="국가 추가" />
            <input type="submit" id='updatebtn' value="업데이트" />
          </div>

        </form>
        

      </div>
    </>
  )
}

export default App
