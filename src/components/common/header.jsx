import createElement from '../../utils/element'
import { css } from 'goober'
import logo from '../../assets/images/logo.svg'

const Styled = {
  Header: css`
    display: flex;
    justify-content: space-around;
    height: 44px;
    border-bottom: 1px solid #ccc;
  `,
  Logo: css`
    display: inline-flex;
    padding: 5px;
    
    & img {
      width: 30px;
    }   
  `
}

const header = {
  template: () => (
    <header className={Styled.Header}>
      <a href="/" className={Styled.Logo}>
        <img src={logo} alt="cls" />
      </a>
    </header>
  ),
  render: el => el.append(header.template())
}

export default header