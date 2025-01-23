/* eslint-disable react/prop-types */
function ButtonSection({ handleSubmit, handleUpdate }) {
  return (
    <div className='button-section'>
      <input
        type='submit'
        id='addbtn'
        value="국가 추가"
        onClick={handleSubmit} />
      <input
        type="button"
        id='updatebtn'
        value="업데이트"
        onClick={handleUpdate} />
    </div>
  )
}

export default ButtonSection
