import React, { Component } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalRedIsOpen: false,
            ModalGreenIsOpen: false
        };
    }
    openRedModal = () => { this.setState({ ModalRedIsOpen: true }) }
    closeRedModal = () => { this.setState({ ModalRedIsOpen: false }) }
    openGreenModal = () => { this.setState({ ModalGreenIsOpen: true }) }
    closeGreenModal = () => { this.setState({ ModalGreenIsOpen: false }) }
    handleOuterClick = (e) => {
        if (e.target.closest('div').className === 'outer' && this.state.ModalRedIsOpen) { this.closeRedModal() }
        else if (e.target.closest('div').className === 'outer' && this.state.ModalGreenIsOpen) { this.closeGreenModal() }
    }

    render() {
        return (
            <div>
                <Button
                    className='button'
                    backgroundColor='red'
                    text='Open first modal'
                    onClick={this.openRedModal} />

                <Button
                    className='button'
                    backgroundColor='darkgreen'
                    text='Open second modal'
                    onClick={this.openGreenModal} />

                {this.state.ModalRedIsOpen && (
                    <Modal
                        className='modal'
                        header={'Do you want to delete this file?'}
                        closeButton={true}
                        text={`Once you delete this file, it won"t be possible to undo action. \n  Are you sure you want to delete?`}
                        actions={this.closeRedModal}
                        onClick={this.handleOuterClick}
                        buttonText1='Ok'
                        buttonText2='Cancel'
                        color1='grey'
                        color2='cadetblue' />

                )
                }
                {this.state.ModalGreenIsOpen && (
                    <Modal
                        className='modal'
                        header={'Join our mailing list'}
                        closeButton={false}
                        text={`Sign up for our mailing list to stay up to date on the latest news and promotions. \n  Are you sure you want to join?`}
                        actions={this.closeGreenModal}
                        onClick={this.handleOuterClick}
                        buttonText1='Sign up now'
                        buttonText2='Maybe later'
                        color1='lightcoral'
                        color2='lightseagreen' />
                    )
                }</div>
        )
    }
}

export default App;