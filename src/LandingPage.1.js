class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let url = "/templates";
    this.props.history.push(url);
  }


}

  export default withRouter(LandingPage);

