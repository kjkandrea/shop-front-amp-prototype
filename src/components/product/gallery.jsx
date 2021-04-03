import createElement from '../../utils/element'

class Gallery {
  template(images) {
    return (
      <div>
        <ul>
          {images.map(({ name, src }) => (
            <li>
              <img src={src} alt={name} />
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