import React, { useState } from 'react'

const TAB_NAME = {
  INFO: 'info',
  DESC: 'description',
  COMPARE: 'compare',
}

const InfoTab = ({ attributeGroups = []}) => {
  return <table>
    <tbody>
    {attributeGroups.map((attr, index) => {
      return <tr key={`row_number_${index}`}>
        <td colSpan={attr.value ? 1 : 2}>{attr.name}</td>
        {attr.value && <td>{attr.value}</td>}
        </tr>
    })}
    </tbody>
  </table>
}

const DescriptionTab = ({ seoInfo }) => {
  return <div style={{minHeight: '20vh'}} dangerouslySetInnerHTML={{__html: seoInfo.description}}/>
}

const CompareTab = () => {
  return <div style={{minHeight: '20vh'}}>
    Have idea about api to get this compare tab
  </div>
}
function InfoSection(props) {

  const [currentTab, setTab] = useState(TAB_NAME.INFO);
  const [shouldShowmore, setShowMore] = useState(false);

  const getComponent = (props) => {
    switch (currentTab) {
      case TAB_NAME.INFO:
        return <InfoTab {...props} />
      case TAB_NAME.DESC:
        return <DescriptionTab {...props}/>
      case TAB_NAME.COMPARE:
        return <CompareTab/>
      default:
        return <div />
    }
  }

  return (
    <div className="info-section">
      <div className="info-section__tab">
        <div
          className={`info-section__tab-item info-section__tab-item--${currentTab === TAB_NAME.DESC && 'active'}`}
          onClick={() => setTab(TAB_NAME.DESC)}>
          Mô tả sản phẩm
          </div>
        <div
          className={`info-section__tab-item info-section__tab-item--${currentTab === TAB_NAME.INFO && 'active'}`}
          onClick={() => setTab(TAB_NAME.INFO)}>
          Thông số ký thuật
          </div>
        <div
          className={`info-section__tab-item info-section__tab-item--${currentTab === TAB_NAME.COMPARE && 'active'}`}
          onClick={() => setTab(TAB_NAME.COMPARE)}>
          So sánh giá
          </div>
      </div>
      <div className={`tab-component__wrapper tab-component__wrapper--${shouldShowmore ? 'expand' : 'collapse'}`}>
      {getComponent(props)}
      </div>
      <div className={`showmore-button showmore-button--${shouldShowmore ? 'expand' : 'collapse'}`} onClick={() => setShowMore(!shouldShowmore)}>{shouldShowmore ? 'Thu gọn nội dung ▲' : 'Hiển thị nhiều hơn ▼'}</div>
    </div>
  )
}

export default InfoSection
