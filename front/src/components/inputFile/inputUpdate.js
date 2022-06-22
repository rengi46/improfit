import React from "react";
import "./inputUpdate.css";

const InputUpdate = ({ onChange, onBlur, name }) => {
  return (
    <div className="container-input">
      <input
        type="file"
        name={name}
        id="file-4"
        className="inputfile inputfile-4"
        data-multiple-caption="{count} archivos seleccionados"
        accept={".jpg, .jpeg, .gif"}
        multiple
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor="file-4">
        <span className="iborrainputfile">subir</span>
      </label>
    </div>
  );
};

export default InputUpdate;
