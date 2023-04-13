import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogListDetails} = props
  const {id, title, topic, author, imageUrl, avatarUrl} = blogListDetails
  return (
    <Link className="item-link" to={`/blogs/${id}`}>
      <div className="list-item">
        <img src={imageUrl} alt={title} className="image" />
        <div className="author-title-details">
          <p>{title}</p>
          <p>{topic}</p>
          <div className="author-details">
            <img src={avatarUrl} alt={author} className="author-img" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
