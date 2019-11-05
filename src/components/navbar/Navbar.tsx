import React from "react";
import { Layout, Menu, Icon } from "antd";

export interface NavProps {}

export default class Navbar extends React.Component<NavProps> {
  public render(): JSX.Element {
    const { Sider } = Layout;
    return (
      <Sider width="14%">
        <Menu mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item key={0}>
            <Icon type="line-chart" style={{ fontSize: "1.5rem" }} />
            <span>overview</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="user-add" style={{ fontSize: "1.5rem" }} />
            <span>add client</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="solution" style={{ fontSize: "1.5rem" }} />
            <span>client list</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="question-circle" style={{ fontSize: "1.5rem" }} />
            <span>request features</span>
          </Menu.Item>
          <Menu.Item>
            <Icon type="exclamation-circle" style={{ fontSize: "1.5rem" }} />
            <span>report an issue</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
