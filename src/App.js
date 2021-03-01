import "./App.css";
import { Component } from "react";
import CardList from './components/CardsList/CardsList'
import {setCards} from './store/actions/fetchCards/fetchCards'
import {setTotalPages} from './store/actions/pagesCreator'
import {connect} from 'react-redux'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Spinner,Container } from "react-bootstrap";
import Pagination from './components/Pagination/Pagination'


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
          <Container style={{margin:"100px 0px 100px 0px"}}>
          <CardList/>
          <Pagination />
</Container>
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
    setCards: () => dispatch(setCards()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)