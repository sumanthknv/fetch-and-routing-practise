import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogsItemData: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetailsData()
  }

  getBlogItemDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
      author: data.author,
    }
    this.setState({blogsItemData: updatedData, isLoading: false})
  }

  getRenderBlodItemDetails = () => {
    const {blogsItemData} = this.state
    const {content, topic, author, imageUrl, avatarUrl} = blogsItemData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{topic}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={topic} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getRenderBlodItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
