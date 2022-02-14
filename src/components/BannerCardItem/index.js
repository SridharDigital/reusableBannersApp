import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className, id} = bannerCardDetails
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="main-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <div>
          <button className="button">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
