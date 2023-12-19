import React from 'react'
import Cell from './Cell'
const Row = ({item}) => {
  return (
    <tr>
        {/* Object.entries được sử dụng để biến đổi các thuốc tính trong 1 đối tượng thành 1 mảng chứa cặp giá trị[key, value]
        ví dụ id: 1 thì sẽ tách thành mảng ['id', 1] */}
        {Object.entries(item).map(([key,value])=>
        {
            return (
                <Cell key={key} cellData={JSON.stringify(value)}/>
            )
        })}
    </tr>
  )
}

export default Row