import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Layout } from "antd";
export interface AdminProps {}

export default class App extends React.Component<AdminProps> {
  public render(): JSX.Element {
    return (
      <Layout>
        <Navbar></Navbar>
        <Layout>hi</Layout>
      </Layout>
    );
  }
}
