import React from 'react';
import {
    Button,
    Modal
} from 'reactstrap';


class formModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modal: false
        }
    }

    render(){
        let { modal , mode , title } = this.props;
        return (
            <React.Fragment>  
            <Modal
                className = 'modal-dialog-centered'
                isOpen = {modal}
                toggle = {mode}
                size='lg'
                autoFocus={false}
            >
                <div className='modal-header'>
                    <h5 className='modal-title'>
                        {title}
                    </h5>
                    <Button
                        aria-label='Close'
                        className='close'
                        data-dismiss ='modal'
                        type ='button'
                        onClick={mode}
                    >
                        <span aria-hidden = {true}> x </span>
                    </Button>
                </div>
                <div className='modal-body'>
                    {this.props.children}
                </div>
                <div className='modal-footer'>

                </div>
            </Modal>
            </React.Fragment>
        )
    }
}

export default formModal;