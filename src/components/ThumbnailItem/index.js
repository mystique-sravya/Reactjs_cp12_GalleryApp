import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, clickThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbClassName = isActive ? 'thumb-active' : 'thumb-inactive'

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        onClick={onClickThumbnail}
        type="button"
      >
        <img
          className={thumbClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
