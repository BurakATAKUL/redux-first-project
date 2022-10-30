import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { reset } from '../redux/actions/counterActions'
import { connect } from "react-redux"
import RestartAltIcon from '@mui/icons-material/RestartAlt';
 class ResetCounter extends Component {
  render() {
    return (
      <div>

        <button onClick={e=>{
            this.props.dispatch(reset());
        }}>
                <RestartAltIcon color='success'/>
                0
        </button>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return { acitons: bindActionCreators(reset, dispatch) }
  
  }
  export default connect(mapDispatchToProps)(ResetCounter);
