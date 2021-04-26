import './index.less'
const Header = (props) => {
  return (
    <header className="header">
      {props.children}
      <section className="login">
        <span>登录 | </span>
        <span>注册</span>
      </section>
    </header>
  )
}

export default Header