
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


class IncreaseByTwoCounter extends Component {


  render() {
    return (

      <div>

        <button onClick={e => {
          this.props.dispatch(increaseByTwoCounter());

        }} >  <HorizontalRuleIcon color='success' /> 2
        </button>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { acitons: bindActionCreators(increaseByTwoCounter, dispatch) }

}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);