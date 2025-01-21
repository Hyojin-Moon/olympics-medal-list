import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='main-container'>
        <nav className='navbar'>
          <h1>2025 Olympics</h1>
        </nav>

        <div className='input-section'>

          <div className="input-group">
            <p>국가명</p>
            <input type="text" id="nation" placeholder="국가 입력" />
          </div>
          <div className="input-group">
            <p>금메달</p>
            <input type="text" id="gold" />
          </div>
          <div className="input-group">
            <p>은메달</p>
            <input type="text" id="silver" />
          </div>
          <div className="input-group">
            <p>동메달</p>
            <input type="text" id="bronze" />
          </div>

          <div className='button-section'>
            <input type="button" id='addbtn' value="국가 추가" />
            <input type="button" id='updatebtn' value="업데이트" />
          </div>

        </div>

        <h3>*입력된 값이 들어올 구역*</h3>

      </div>
    </>
  )
}

export default App
