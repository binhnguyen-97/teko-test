import React from 'react'

function SnackBar({ success }) {
  return (success ?
    <div className="snack-bar--success">
      Thêm vào giỏ hàng thành công
    </div> :
    <div className="snack-bar--fail">
      Đã có lỗi xảy ra
  </div>
  )
}

export default SnackBar
