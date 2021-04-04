import createElement from '../../utils/element'
import { fitToScreen, square } from '../../assets/styles/common'
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/src/tiny-slider.scss'

class Gallery {
  constructor() {
    this.slider = null
  }

  template(images) {
    return (
      <div>
        <ul id="slider">
          {images.map(({ name, src }) => (
            <li className={square('100%')}>
              <img className={fitToScreen} src={src} alt={name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
  sliderInit() {
    const foo = tns({
      container: '#slider',
      items: 1,
    });
  }
  render(data) {
    document.getElementById('product-summary').append(this.template(data))
    this.sliderInit()
  }
}

export default new Gallery