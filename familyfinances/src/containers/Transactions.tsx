import React from 'react'
import Container from '../components/Container'
import ExpensesTable from '../components/ExpensesTable'

export default class Transactions extends React.Component{
    public render(){
        return(
            <Container elevation={10}>
                <ExpensesTable/>
            </Container>
        )
    }
}