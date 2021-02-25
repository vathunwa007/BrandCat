import dynamic from 'next/dynamic';
import Loading from "../components/Loading";
import React from "react";

export default function asyncComponent(importComponent) {

  return dynamic(importComponent,
    {
      loading: () => <Loading/>
    });
}
