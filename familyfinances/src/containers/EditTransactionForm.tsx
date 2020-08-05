import React from "react";
import { Modal } from "../components/Modal";
import EditTransactionModal from "../components/EditTransaction";
import * as transactionsDucks from "../ducks/transactions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export interface IModalTransactionProps {
  open?: any;
  id?: any;
  onClick?: any;
}

export default class EditTransactionForm extends React.Component<
  IModalTransactionProps
> {
  constructor(props: IModalTransactionProps) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  public render() {
    const {open,id} = this.props
    let opener
    if (id == open.open && open.setOpen == true) {
        opener = true
      } else {
        opener = false
      }
    
    return (
      <Modal open={opener}>
        <EditTransactionModal />
      </Modal>
    );
  }
  private handleClose = () => {
    console.log("blalblab");
  };

  private escFunction(event: any) {
    if (event.keyCode === 27) {
      this.handleClose();
    }
  }

}

/*
const mapStateToProps = (state: any) => {
    const {
      Transactions: { modal}
    } = state;
    return {
      modal
    };
  };
  
  const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(transactionsDucks, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionForm);

*/
