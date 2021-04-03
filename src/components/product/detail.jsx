import createElement from '../../utils/element'

const detail = {
  template: ({ name, price }) => (
    <div className="detail">
      <h2 className="title">{name}</h2>
      <dl>
        <dt>Price:</dt>
        <dd>{price}</dd>
      </dl>
    </div>
),
  render(data) {
    document.getElementById('product-summary').append(detail.template(data))
  }
}

export default detail