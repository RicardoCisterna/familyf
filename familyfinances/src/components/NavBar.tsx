import React from "react";
import { CSSProperties } from "react";

const style = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  borderBottom: "inset 1px rgb(45 45 45)",
  padding: "10px 15px"
} as CSSProperties;

export default class NavBar extends React.Component {
  public render() {
    return (
      <div style={style}>
        <div>icono</div>
        <span style={{ fontWeight: "bolder", fontFamily: "inherit" }}>
          Family Finances
        </span>
        <div>opciones</div>
      </div>
    );
  }
}
