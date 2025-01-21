import { useState } from 'react'
import './App.css'

function App() {

  // 기본 상태를 관리할 useState 훅을 사용해 초기 상태를 설정
  const [data, setData] = useState('');
  const handleInputChange = () => {
  }
  //onSubmit 이벤트 핸들러를 설정
  const handleSubmit = () => {

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
            <input type="text" id="nation" placeholder="국가 입력" onChange={handleInputChange} />
          </div>
          <div className="input-group" >
            <p>금메달</p>
            <input type="text" id="gold" onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <p>은메달</p>
            <input type="text" id="silver" onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <p>동메달</p>
            <input type="text" id="bronze" onChange={handleInputChange} />
          </div>

          <div className='button-section'>
            <input type='submit' id='addbtn' value="국가 추가" />
            <input type="submit" id='updatebtn' value="업데이트" />
          </div>

        </form>

        <h3>*입력된 값이 들어올 구역*</h3>

      </div>
    </>
  )
}

export default App
