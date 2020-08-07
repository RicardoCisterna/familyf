import React from 'react'


const style ={
    backgroundColor: 'black',
    padding: '10px 10px',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    border: 'inset white',
    width : '80%',
    marginLeft: '5%',
    marginrigth: '5%',
    marginBottom:'5%'
}
const spanStyle ={
    fontSize :'12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width : '80%',
    marginLeft: '5%'
} as React.CSSProperties

interface IInput{
    backgroundColor?: string
    placeholder?: string
    label?: string
    value?:string
    input: any
   
}

const Input = (props: IInput) => {
        const { label} = props

        const inputs = {...props.input}

            return(
                <div>
                 <span style={spanStyle}>{label}</span>
                 <input   {...props} {...inputs.name} {...inputs.value} {...inputs.onChage}  style={style} />                
                </div>
            )
}
    

 export default  Input
