import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { contenido, evento } = props;
  return (
    <button onClick={() => evento()} className="button">
      {contenido}
    </button>
  );
}
