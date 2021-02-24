import "./App.css";
import axios from "axios";
import { Component } from "react";
import CardList from './components/CardsList/CardsList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imageUrl: "http://contest.elecard.ru/frontend_data/",
    };
  }

  componentDidMount() {
    axios
      .get(`http://contest.elecard.ru/frontend_data/catalog.json`)
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <CardList cards={data} />
      </div>
    );
  }
}

export default App;
