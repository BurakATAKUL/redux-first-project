
import React, { Component } from 'react'
import { connect } from 'react-redux'//Connect reduxa bağlanamamız sağlar


class Counter extends Component {


  render() {
    return (
      <div>

        

        <h1>{this.props.counter}</h1>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {counter:state.counterReducer}//state bilgisini counterReducerdan çek anlamında return eder 
}


export default connect(mapStateToProps)(Counter);
//mapStateToPropd Counterın proplarına stateı bağlar 