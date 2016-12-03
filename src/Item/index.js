import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    let content = this.props.params.title== 0 ? '这是第一个页面' :
                  this.props.params.title== 1 ? '这是第二个页面' :
                  this.props.params.title== 2 ? '这是第三个页面' :
                  this.props.params.title== 3 ? '这是第三个页面' : '这是第N个页面'
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
