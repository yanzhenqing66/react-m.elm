import {Link} from 'react-router-dom'
import './index.less'
import Header from '../../components/header'
const Home = () => {
  return (
    <div className="home">
      <Header>
        <section className="logo">m.elm</section>
      </Header>
      <article className="city_nav">
        <section className="city_tips">
          <span>当前城市定位：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </section>
        <Link to={`/city`} className="city_link">
          <span>北京</span>
        </Link>
      </article>
    </div>
  )
}

export default Home