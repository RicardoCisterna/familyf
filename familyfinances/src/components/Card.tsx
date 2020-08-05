import React from "react";
import { TitleCard, ITitleProps } from "./TitleCard";

const style = {
  color: "white",
  background: `linear-gradient(#545454,rgb(49 49 49),#232323,black)`,
  display: "flex",
  flexDirection: 'column',
  border:'1px',
  borderColor: 'black',

} as React.CSSProperties;

export default class Card extends React.Component<ITitleProps> {
  public render() {
    const { children, title } = this.props;
    return (
      <div style={style}>
          <TitleCard title={title} />
        <div >{children}</div>
      </div>
    );
  }
}
