
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

 class DecreaseCounter extends Component {


  render() {
    return (
      <div>

        <button onClick={e=>{
          this.props.dispatch(decreaseCounter());
        }}>
          <HorizontalRuleIcon color='success'/> 1
            
        </button>
        
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { acitons: bindActionCreators(decreaseCounter, dispatch) }

}
export default connect(mapDispatchToProps)(DecreaseCounter);