// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumb = () => {
    setActiveImageId(id)
  }

  const thumbnailClassName = isActive
    ? 'thumbnail-image active-thumb'
    : 'thumbnail-image'

  return (
    <li className="thumbnail-item">
      <button className="thumbnail-btn" type="button" onClick={onClickThumb}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
