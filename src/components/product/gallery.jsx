import createElement from '../../utils/element'
import { fitToScreen, square } from '../../assets/styles/common'

class Gallery {
  template(images) {
    return (
      <div>
        <ul>
          {images.map(({ name, src }) => (
            <li className={square('100%')}>
              <img className={fitToScreen} src={src} alt={name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  render(data) {
    document.getElementById('product-summary').append(this.template(data))
  }
}

export default new Gallery