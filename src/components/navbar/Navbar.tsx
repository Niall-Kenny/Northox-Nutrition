import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export interface NavProps {}

export default class Navbar extends React.Component<NavProps> {
  public render(): JSX.Element {
    const { Sider } = Layout;
    return (
      <Sider
        style={{ minHeight: "100vh" }}
        width="19%"
        theme="light"
        collapsible
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          style={{ height: "80%" }}
        >
          <Menu.Item key={0}>
            <Link to="/overview" />
            <Icon type="line-chart" style={{ fontSize: "1.5rem" }} />
            <span>overview</span>
          </Menu.Item>
          <Menu.Item>
            <Link to="/add-client" />
            <Icon type="user-add" style={{ fontSize: "1.5rem" }} />
            <span>add client</span>
          </Menu.Item>
          <Menu.Item>
            <Link to="/client-list" />
            <Icon type="solution" style={{ fontSize: "1.5rem" }} />
            <span>client list</span>
          </Menu.Item>

          <Menu.Item>
            <Link to="/request_features" />
            <Icon type="question-circle" style={{ fontSize: "1.5rem" }} />
            <span>request features</span>
          </Menu.Item>
          <Menu.Item>
            <Link to="/report_issue" />
            <Icon type="exclamation-circle" style={{ fontSize: "1.5rem" }} />
            <span>report an issue</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
