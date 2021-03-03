import "./App.scss";
import { Component } from "react";
import CardList from './components/CardsList/CardsList'
import {setCards} from './store/actions/fetchCards'
import {connect} from 'react-redux'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Spinner,Container } from "react-bootstrap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imageUrl: "http://contest.elecard.ru/frontend_data/",
    };
  }

  componentDidMount() {
    this.props.setCards();

    
  }
  render() {
    const {isLoading} = this.props
    if(isLoading)  {
      return (
        <div>
           <Spinner animation="border" variant="primary" >
             <span className="sr-only">Loading...</span>
           </Spinner>
        </div>
      )
    }else {
      return (
      
        <div>
          <Header />
          <Container className="main-container">
            <CardList/>
          </Container>
          <Footer />
        </div>
      );
    }

  }
}


const mapStateToProps = (state) => {
  return {
    isLoading:state.cards.isLoading,
    closedCards:state.cards.closedCards
  }
}

const  mapDispatchToProps = ( dispatch ) => {
  return {
    setCards: () => dispatch(setCards()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)