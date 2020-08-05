import React from 'react'

const style = (blocks: string) => ({
   

    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#2f2f2f',
    padding: '10px 10px',
    border: 'inset white',
    marginColor: 'black',
    color: 'white',
    borderRadius:'7px',
    margin: '10px 10px',
    fontWeight: 'bolder',
}) as React.CSSProperties

interface IBlock{
    blocks?: string,
    type?: any
}


export default  class Button extends React.Component<IBlock>{
    public render(){
        const {blocks = '', } = this.props
        return(
            <button {...this.props} style={style(blocks)}/>
        )
    }

}