/* eslint-disable react/prop-types */

function MedalItem({nation, handleDelete, index}) {
  return (
    <div className='nations-item'>
      <p>{nation.nation}</p>
      <p id="goldmedal">{nation.gold}</p>
      <p>{nation.silver}</p>
      <p>{nation.bronze}</p>
      <p id="totalmedal">{nation.gold + nation.silver + nation.bronze}</p>
      <button id='deletebtn' onClick={() => handleDelete(index)}>삭제</button>
    </div>
  )
}


export default MedalItem;
