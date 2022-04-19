import React from "react";
import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div className="m-auto">
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  );
}
