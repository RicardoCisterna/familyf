import React from 'react'



const style ={
    height: '100vh',
    color: 'white',
    background: `linear-gradient(#545454,rgb(49 49 49),#232323,black)`,
    padding: '20px',
    border: 'black',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
} as React.CSSProperties

interface IContainerProps {
    elevation?: number
}

export default class Container extends React.Component<IContainerProps>{
    public render(){
        const {children, elevation = 0} = this.props
        return(

            <div style={style}>
                
                    {children}
                
            </div>
        )
    }
}