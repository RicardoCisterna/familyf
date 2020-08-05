import React from 'react'
import EditTransactionForm  from '../containers/EditTransactionForm'


export default class Prueba extends React.Component{
    constructor(props:any){
        super(props)
        this.state= {open:'no', setOpen: false }
    }

    public render(){
        console.log('prueba', this.state)
        const modals = [{a:'1'},{a:'2'}]
        const body = modals.map(x => {

            return(
            <div onClick={this.handleOpen} id={x.a}>
                hola {x.a}
                <EditTransactionForm  id={x.a} open={this.state}/>
            </div>
            )
        }) 
        return(
            <div>
               {body}
            </div>
        )
    }
    private handleOpen = (e:any) =>{
        console.log(e.target)
        if(e.target.id)  
        this.setState({open:e.target.id,setOpen:true})
    }
}