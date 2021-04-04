import createElement from '../../utils/element'
import logo from '../../assets/images/logo.svg'

const header = {
  template: () => (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="cls" />
      </a>
    </header>
  ),
  render: el => el.append(header.template())
}

export default header