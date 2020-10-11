import React from "react";
import Button from "@material-ui/core/Button";

const AddDataField = ({ addData }) => {
  return (
    <Button onClick={addData} variant="contained" color="primary">
      AddData
    </Button>
  );
};
export default AddDataField;
