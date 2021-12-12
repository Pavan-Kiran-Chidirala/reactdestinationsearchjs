// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeList} = props
  const {name, imgUrl} = placeList
  return (
    <li className="item-holder">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name-heading">{name}</p>
    </li>
  )
}
export default DestinationItem
