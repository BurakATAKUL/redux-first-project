
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from "react-redux"
import AddIcon from '@mui/icons-material/Add';


class IncreaseCounter extends Component {


    render() {
        return (
            <div>

                <button onClick={e => (
                    this.props.dispatch(increaseCounter())
                )} >

                    <AddIcon color="success" /> 1

                </button>



            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return { acitons: bindActionCreators(increaseCounter, dispatch) }

}
export default connect(mapDispatchToProps)(IncreaseCounter);