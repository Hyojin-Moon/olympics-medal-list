/* eslint-disable react/prop-types */
import "../../App.css";

function MedalList({nations, setNations}) {

  // ** 삭제 핸들러 **
  const handleDelete = (index) => {
    // 인덱스를 기준으로 nations 배열에서 항목 삭제
    const deletedNations = nations.filter((_, i) => i !== index);
    setNations(deletedNations); // 상태 업데이트

    //로컬스토리지 저장
    localStorage.setItem('nations', JSON.stringify(deletedNations));
  };

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
                  <button id='deletebtn' onClick={() => handleDelete(index)}>삭제</button>
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