import React from 'react';
import { render } from "@testing-library/react";
import { Container } from "react-bootstrap";
import onePost from "./onePost";

export default function Post({ reviews }) {


  return (
    <div>
      <onePost />
    </div>
  );
}
