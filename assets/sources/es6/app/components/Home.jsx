
export default class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="home">
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>GALLERY</li>
            <li>BLOG</li>
          </ul>
        </nav>
        <div className="home_title">
          <img src="/assets/dist/media/KENTAKOMAI.png" alt="KENTA KOMAI" /><br />
          <img src="/assets/dist/media/TAMAGO_MAGO2.png" alt="TAMAGO_MAGO_2" /><br />
          <img src="/assets/dist/media/Github.io.png" alt="Github.io" />
        </div>
      </section>
    )
  }
}
