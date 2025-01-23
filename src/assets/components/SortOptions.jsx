/* eslint-disable react/prop-types */

function SortOptions({ handleSort, sortOption }) {

  return (
    <div className='sort-option'>
      <label>
        <input
          type="radio"
          value="gold"
          onChange={handleSort}
          checked={sortOption === 'gold'} />
        금메달 기준 정렬
      </label>
      <label>
        <input
          type="radio"
          value="total"
          onChange={handleSort}
          checked={sortOption === 'total'} />
        총 메달 기준 정렬
      </label>
    </div>
  )
}

export default SortOptions
