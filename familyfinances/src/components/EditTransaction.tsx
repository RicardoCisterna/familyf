import React from "react";
import Input from "./Input";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import Button from './Button'
import Card from './Card'

interface ITransaction {
  nombre?: string;
  monto?: number;
  categoria?: string;
  descripcion?: string;
  id?:string
  open?:boolean
}

export interface IModalTransactionProps {
  closeTransacionModal?: () => void;
  openTransacionModal?: () => void;
}

const style = { 
  marginTop: '10px',
  marginBottom: '10px',
  backgroundColor: '#2f2f2f',
  padding: '10px 10px',
  border: 'inset white',
  marginColor: 'black',
  color: 'white',
  borderRadius:'7px',
  marginLeft: '10px',
  fontWeight: 'bolder',
} as React.CSSProperties
// inside your render() method


class EditTransaction extends React.Component<InjectedFormProps<ITransaction> & ITransaction> {
  public render() {
    return (
      <Card title='Editar Transaction'>
      <form >
        <Field
          label="monto"
          placeholder="monto"
          name="monto"
          type="text"
          component={Input}
        />
        <Field
          name="descripcion"
          component={Input}
          type="text"
          label='descripcion'
          placeholder="descripcion"
        />
           <Field
          label="motivo"
          placeholder="motivo"
          name="motivo"
          type="text"
          component={Input}
        />
        <Field
          name="categoria"
          component={Input}
          type="text"
          label='categoria'
          placeholder="categoria"
        />
      </form>
      <div style={{ display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",}}>
        <button id='buttonClose' style = {style } onClick={this.handleClose} >cerrar</button>
        <Button>guardar</Button>
      </div>
      </Card>
    );
  }
    private handleClose = () => {
     /* const { closeTransacionModal } = this.props;
      closeTransacionModal();*/
      console.log('bla')
    };
  
}
/*const mapStateToProps = (state: any) => {
  const {
    Transactions: {modal}
  } = state;
  console.log('stado',modal)
  return {
    modal
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(transactionsDucks, dispatch);

const loginForm =connect(mapStateToProps, mapDispatchToProps)(LoginForm)*/

export default reduxForm<{},ITransaction>({
  form: "EditTransaction"
})(EditTransaction);



