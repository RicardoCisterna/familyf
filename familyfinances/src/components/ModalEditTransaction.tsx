import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import * as transactionsDucks from '../ducks/transactions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { white } from 'color-name';



interface ISimpleModalProps{
    open: boolean,
    setOpen: boolean,
    closeTransacionModal: () => void
    openTransacionModal: () => void

} 

class SimpleModal extends React.Component<ISimpleModalProps> {
    constructor(props: ISimpleModalProps) {
        super(props);
       
      }
   

  

  public render(){
 const {open} = this.props


  const body = (
    <div style={{color:'white',backgroundColor:'blue' }}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
   
    <div>
      <button type="button" onClick={this.handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>

  );
  }

  private  handleOpen = () => {
    const {openTransacionModal} = this.props 
    openTransacionModal();
  };

  private  handleClose = () => {
    const {closeTransacionModal} = this.props
    closeTransacionModal()
  };

}




const mapStateToProps = (state: any) => {
    const {Transactions: {open, setOpen}} =state;
    console.log('mpa state',state)
    return {
      open,
      setOpen
    };
  };

  const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(transactionsDucks, dispatch);


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SimpleModal)