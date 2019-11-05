import React from "react";
import { Layout } from "antd";

export interface AddClientProps {}

export default class App extends React.Component<AddClientProps> {
  public render(): JSX.Element {
    const { Content, Header, Footer } = Layout;

    return (
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Kenny Design ©2019</Footer>
      </Layout>
    );
  }
}
