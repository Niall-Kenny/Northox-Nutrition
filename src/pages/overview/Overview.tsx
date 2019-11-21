import * as React from "react";
import { Layout } from "antd";

export interface OverviewProps {}

export function Overview(props: OverviewProps): JSX.Element {
  const { Content, Header, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Kenny Design ©2019</Footer>
    </Layout>
  );
}
