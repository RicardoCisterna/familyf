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
  }

  public render() {
    const {open} = this.props
    return (
      <Modal open={open.open} idTransaccion={open.id}>
        <EditTransactionModal id={open.id}/>
      </Modal>
    );
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
