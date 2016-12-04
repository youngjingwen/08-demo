import React, { PropTypes } from 'react'
import axios from 'axios'

import BlogCard from '../component/BlogCard'

class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/youngjingwen/08-demo/master/data/blogcard.json?sdf')
    .then( res => this.setState({data:res.data,wait:false}))
  }
  render () {
    let cards = this.state.data.map((item,i) => <BlogCard {...item} key={i}/>)
    return(
      <div className='blog-wrap'>
      {this.state.wait ? '请等待' : cards}
      </div>
    )
  }
}

export default Blog;
