import createElement from '../../utils/element'
import { css } from 'goober'
const Styled = {
  Buttons: css`
    margin-top: 10px;
  
    & button {
      width: 100%;
      height: 42px;
    }
  `,
  BuyButton: css`
    background-color: #040404;
    color: #fff;
    border: none;
  `
}

const buyButton = {
  template: () => (
   <div className={Styled.Buttons}>
     <button className={Styled.BuyButton} onclick={buyButton.onClickBuy}>구매하기</button>
   </div>
  ),
  onClickBuy: () => {
    alert('buy')
  },
  render: el => el.append(buyButton.template())
}

export default buyButton