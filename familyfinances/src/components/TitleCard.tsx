import React from 'react'



const style = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottom: "inset 1px rgb(45 45 45)",
    padding: "10px 15px",
    marginBottom: '5px',
  } as React.CSSProperties;

export interface ITitleProps{
    title?: string
}



export class TitleCard extends React.Component<ITitleProps>{

    public render(){
        const {title} = this.props
        return(
            <div style={style}>
                {title}
            </div>
        )
    }
}