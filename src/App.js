import "./App.css";
import { Component } from "react";
import CardList from './components/CardsList/CardsList'
import {setCards} from './store/actions/fetchCards/fetchCards'
import {connect} from 'react-redux'
import Header from './components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imageUrl: "http://contest.elecard.ru/frontend_data/",
    };
  }

  componentDidMount() {
    this.props.setCards()
    console.log(this.props)
  }

  render() {
    const {isLoading} = this.props
    if(isLoading)  {
      return (
        <div>
          Loading...
        </div>
      )
    }else {
      return (
      
        <div>
          <Header />
          <CardList/>
          
        </div>
      );
    }

  }
}


const mapStateToProps = (state) => {
  return {
    isLoading:state.cards.isLoading
  }
}

const  mapDispatchToProps = ( dispatch ) => {
  return {
    setCards: () => dispatch(setCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)