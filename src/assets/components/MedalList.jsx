/* eslint-disable react/prop-types */
import "../../App.css";

function MedalList({nations}) {

  // ** 삭제 핸들러 **
  const handleDelete = () => {
    
  }

  return (
    <div>
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
                  <button id='deletebtn' onClick={handleDelete}>삭제</button>
                </div>
              ))}
            </>
          )}
          {nations.length === 0 && <h4>현재 추가된 국가가 없습니다.</h4>}
        </div>
    </div>
  )
}

export default MedalList;