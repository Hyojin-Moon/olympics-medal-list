/* eslint-disable react/prop-types */

function InputSection({ data, handleInputChange }) {
  return (
    <>
      <div className="input-group">
        <p>국가명</p>
        <input
          type="text"
          id="nation"
          placeholder="국가 입력"
          onChange={handleInputChange}
          value={data.nation} />
      </div>
      <div className="input-group" >
        <p>금메달</p>
        <input
          type="number"
          id="gold"
          onChange={handleInputChange}
          value={data.gold} />
      </div>
      <div className="input-group">
        <p>은메달</p>
        <input
          type="number"
          id="silver"
          onChange={handleInputChange}
          value={data.silver} />
      </div>
      <div className="input-group">
        <p>동메달</p>
        <input
          type="number"
          id="bronze"
          onChange={handleInputChange}
          value={data.bronze} />
      </div>
    </>
  )
}

export default InputSection
