import React from "react";



export interface IModalTransactionProps {
    open?: any;
    idTransaccion?:any
  }


const style = (open: any) => {
  if (open === false) {
  
      const modalStyle: React.CSSProperties =  {
      display: "none",   
      zIndex: 1,
      paddingTop: '100px',
      left: '0',
      top: '0',
      width: '100%',
      height: '100vh',
      overflow: 'auto', 
      backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'fixed', 
    }
    return modalStyle
    
  } else {
    const modalStyle: React.CSSProperties =  {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',   
        zIndex: 1,
        paddingTop: '100px',
        left: '0',
        top: '0',
        overflow: 'auto', 
        position: 'fixed', 
        width: '100%',
        height: '100%',
        backgroundColor: '#00000091'
      }
      return modalStyle
  }
} 

export class Modal extends React.Component<IModalTransactionProps> {
  constructor(props:any){
    super(props)
    this.handleOpen = this.handleOpen.bind(this)
  }


  public render() {
    const { children,open} = this.props;
    return <div style={style(open)}>
         {children}
    </div>;
  }
  
  private handleOpen(){
    this.setState({open:true})
  }


}


