import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { useState } from "react";
import { Controlled as ControlledEditer } from "react-codemirror2";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";

import "../styles.css";
const Editor = ({ language, title, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = React.useState(true);

  const handleChanges = () => {
    setChecked((prev) => !prev);
  };
  function handleChange(editer, data, value) {
    onChange(value);
  }
  return (
    <div className={`editor-container ${open ? "" : "collapse"}`}>
      <div className="editer-title">
        {title}
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChanges} />}
        />
      </div>
      <Collapse in={checked}>
        <ControlledEditer
          onBeforeChange={handleChange}
          className="codemirror-wrapper"
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true
          }}
        />
      </Collapse>
    </div>
  );
};

export default Editor;
