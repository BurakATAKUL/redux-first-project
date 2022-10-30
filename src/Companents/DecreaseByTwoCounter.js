import { bindActionCreators } from 'redux'
import { decreaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux"
import AddIcon from '@mui/icons-material/Add';
import React, { Component } from 'react'

class DecreaseByTwoCounter extends Component {
  

    render() {
        return (
            <div >

                <button onClick={e => {
                    this.props.dispatch(decreaseByTwoCounter());
                }}>
                    <AddIcon color='success' />2

                </button>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { acitons: bindActionCreators(decreaseByTwoCounter, dispatch) }

}
export default connect(mapDispatchToProps)(DecreaseByTwoCounter);