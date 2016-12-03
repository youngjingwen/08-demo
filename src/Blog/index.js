import React, { PropTypes } from 'react'
import BlogCard from '../component/BlogCard'

let data =[
  {index:1,title:'hello',desc:'world'},
  {index:2,title:'hello2',desc:'world2'},
  {index:3,title:'hello3',desc:'world3'},
  {index:4,title:'hello4',desc:'world4'},
  {index:5,title:'hello5',desc:'world5'},
]

class Blog extends React.Component {
  render () {
    let cards = data.map((item,i) => <BlogCard {...item} key={i}/>)
    return(
      <div className='blog-wrap'>
      {cards}
      </div>
    )
  }
}

export default Blog;
