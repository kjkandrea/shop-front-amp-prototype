import createElement from '../../utils/element'
import { css } from 'goober'
import { addCommas } from '../../utils/replace'
import starRated from './part/starRated.jsx'

const Styled = {
  Detail: css`
    padding: 16px 0;
    
    & dl {
      dt {
         font-size: 0;
      }
      
      dd {
          del {
            margin-right: 0.25rem;
          }
          
          strong {
             font-size: 1.125rem;
          }
      }
    }
  `,
}

const detail = {
  priceUnit: '원',
  template: ({ name, regular_price, sale_price, rating_count }) => (
    <div className={Styled.Detail}>
      <h2>{name}</h2>
      <dl>
        <dt>가격</dt>
        <dd>
          <del>{addCommas(regular_price)}{detail.priceUnit}</del>
          <strong>{addCommas(sale_price)}{detail.priceUnit}</strong>
        </dd>
        <dt>평가</dt>
        <dd>{starRated.render(rating_count)}</dd>
      </dl>
    </div>
),
  render(data) {
    document.getElementById('product-summary').append(detail.template(data))
  }
}

export default detail