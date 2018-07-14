/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Welcome to my super cool Modal example!</ModalHeader>
                    <ModalBody>
                        This is a modal example brought to you today by the number 42 and the letter W. Also by viewers
                        like you! Thank you! This modal documentation can be accessed via
                        reactstrap.github.io/components/modals where you can modal to your hearts content. :)
                        <br />
                        <Button color="success" onClick={this.toggleNested}>This way to the Hopping Chicken Ranch</Button>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested}
                               onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>This here is a nested modal y'all</ModalHeader>
                            <ModalBody>These sure are some rootin' tootin' cool modals.Thanks for visiting! Y'all
                                come back ya hear!</ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleNested}>Take me back</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAll}>I'm outta here</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleContinue}>Continue</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;