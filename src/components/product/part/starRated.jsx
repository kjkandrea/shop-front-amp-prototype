import createElement from '../../../utils/element'

const starRated = {
  template: rate => (
    <span>{rate}</span>
  ),
  render: rate => starRated.template(rate)
}

export default starRated