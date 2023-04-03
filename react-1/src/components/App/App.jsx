import { Component } from "react";
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
                        actionClose={this.closeRedModal}
                        actions={<><Button className='button' text='Ok' onClick={this.closeRedModal} backgroundColor='grey' />
                            <Button className='button' text='Cancel' onClick={this.closeRedModal} backgroundColor='cadetblue' /></>}
                    />

                )
                }
                {this.state.ModalGreenIsOpen && (
                    <Modal
                        className='modal'
                        header={'Join our mailing list'}
                        closeButton={false}
                        text={`Sign up for our mailing list to stay up to date on the latest news and promotions. \n  Are you sure you want to join?`}
                        actionClose={this.closeGreenModal}
                        actions={<><Button className='button' text='Sign up now' onClick={this.closeGreenModal} backgroundColor='lightcoral' />
                            <Button className='button' text='Maybe later' onClick={this.closeGreenModal} backgroundColor='lightseagreen' /></>}
                    />
                )
                }</div>
        )
    }
}

export default App;