import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ModalEditTransaction from './ModalEditTransaction'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border:'10px'
  },
  head:{
    backgroundColor:'black',
    color:'white',
    fontWeight: 'bolder',
    borderColor:'#2b2b2b',
    borderBottomWidth:'2px'
  },
  body:{
    backgroundColor:'#2b2b2b',
    color:'white',
    borderColor:'#2b2b2b',
  }
});



function createData(
  nombre: string,
  monto: number,
  categoria: string,
  descripcion: string
) {
  rows.push({ nombre, monto, categoria, descripcion });
  return rows;
}
interface ITransaction {
  nombre?: string;
  monto?: number;
  categoria?: string;
  descripcion?: string;
}

const rows: Array<ITransaction> = [
  { nombre: "papas", monto: 1000, categoria: "comida", descripcion: "bar" },
  { nombre: "otra cosa", monto: 1000, categoria: "comida", descripcion: "bar" },
  { nombre: "otra cosa mas", monto: 1000, categoria: "comida", descripcion: "bar" },
  { nombre: "cerveza", monto: 1000, categoria: "comida", descripcion: "bar" }
];

export default function ExpensesTable() {
  const classes = useStyles();
  const transctionRows = rows.map(x => (
    <TableRow key={x.nombre}>
      <TableCell className={classes.body} component="th" scope="row" align="left">
        {x.nombre}
      </TableCell>
      <TableCell className={classes.body}  align="right">{x.monto}</TableCell>
      <TableCell className={classes.body} align="right">{x.categoria}</TableCell>
      <TableCell className={classes.body} align="right">{x.descripcion}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer   component={Paper}>
      <Table  className={classes.table +' ' + classes.head} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow >
            <TableCell className={classes.head}  align="left">Nombre</TableCell>
            <TableCell className={classes.head} align="right">Monto</TableCell>
            <TableCell className={classes.head} align="right">Categoría</TableCell>
            <TableCell className={classes.head} align="right">Descripción</TableCell>
          </TableRow>
<ModalEditTransaction/>
        </TableHead>
        <TableBody>{transctionRows}</TableBody>
      </Table>
    </TableContainer>
  );
}
