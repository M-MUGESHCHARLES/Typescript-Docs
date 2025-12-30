import React, { useState } from "react";
import { Divider, Heading } from "../../../components";
import {
  UseStateEx1,
  UseStateEx2,
  UseStateEx3,
} from "../../../components/useState";

export default function UseState() {
  return (
    <>
      <Heading title="UseState Example" />

      {/* Example 1 */}
      <UseStateEx1 />

      <Divider />

      {/* Example 2 */}
      <UseStateEx2 />

      <Divider />

      {/* Example 3 */}
      <UseStateEx3 />
    </>
  );
}
