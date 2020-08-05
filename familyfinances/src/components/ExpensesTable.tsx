import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles,createStyles } from '@material-ui/styles';
import {default as EditTransactionForm,IModalTransactionProps} from '../containers/EditTransactionForm' 
import * as transactionsDucks from "../ducks/transactions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


interface ITransaction {
  nombre?: string;
  monto?: number;
  categoria?: string;
  descripcion?: string;
  id:string
}

interface IExpensesTableProps {
  classes?: any
}

const rows: Array<ITransaction> = [
  { id:'1',nombre: "papas", monto: 1000, categoria: "comida", descripcion: "bar" },
  { id:'2',nombre: "otra cosa", monto: 1000, categoria: "comida", descripcion: "bar" },
  {
    id:'3',
    nombre: "otra cosa mas",
    monto: 1000,
    categoria: "comida",
    descripcion: "bar"
  },
  { id:'4',nombre: "cerveza", monto: 1000, categoria: "comida", descripcion: "bar" }
];


const styles = (theme:any)=> createStyles({
  table: {
    minWidth: 650,
    border: "10px"
  },
  head: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bolder",
    borderColor: "#2b2b2b",
    borderBottomWidth: "2px"
  },
  body: {
    backgroundColor: "#2b2b2b",
    color: "white",
    borderColor: "#2b2b2b"
  },
  editableRow:{
    cursor: 'pointer',
    hover: {
      "&hover:hover": {
          backgroundColor: 'white',
      },
    },
  }
});





export default class ExpensesTable extends React.Component< IExpensesTableProps> {
  public render() {
    const {classes} = this.props;
    
    const transctionRows = rows.map(x => (
      <TableRow hover className={'hola'} key={x.nombre}>
        <EditTransactionForm key={x.id} />
        <TableCell
          className={classes.body}
          component="th"
          scope="row"
          align="left"
        >
          {x.nombre}
        </TableCell>
        <TableCell className={classes.body} align="right">
          {x.monto}
        </TableCell>
        <TableCell className={classes.body} align="right">
          {x.categoria}
        </TableCell>
        <TableCell className={classes.body} align="right">
          {x.descripcion}
        </TableCell>
      </TableRow>
    ));

    return (
      <TableContainer component={Paper}>
        <Table
          className={classes.table + " " + classes.head}
          aria-label="simple table"
        >
          <TableHead className={classes.head}>
            <TableRow >
              <TableCell  className={classes.head} align="left">
                Nombre
              </TableCell>
              <TableCell className={classes.head} align="right">
                Monto
              </TableCell>
              <TableCell className={classes.head} align="right">
                Categoría
              </TableCell>
              <TableCell className={classes.head} align="right">
                Descripción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{transctionRows}</TableBody>
        </Table>
      </TableContainer>
    );
  }

  private handleOpen = () => {
    
    console.log('hola handle open tabel')
  };




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

  

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpensesTable));*/
