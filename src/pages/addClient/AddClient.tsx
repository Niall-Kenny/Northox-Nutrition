import React from "react";
import { Layout, Form, Input, InputNumber, Button } from "antd";
import { FormComponentProps } from "antd/es/form";
import { WrappedFormUtils } from "antd/lib/form/Form";

export interface AddClientProps {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  weight: string;
  targetCalories: number;
}

class AddClientForm extends React.Component<
  AddClientProps & FormComponentProps
> {
  handleSubmit = () => {};

  render(): JSX.Element {
    const { Content, Header, Footer } = Layout;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <Form
            {...formItemLayout}
            onSubmit={(): any => console.log("Submitted")}
          >
            <Input.Group>
              <Form.Item label="First Name">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Last Name">
                <Input></Input>
              </Form.Item>
            </Input.Group>
            <Form.Item label="age">
              <InputNumber></InputNumber>
            </Form.Item>
            <Form.Item label="Weight(lbs)">
              <InputNumber></InputNumber>
            </Form.Item>
            <Form.Item label="Daily Target Calories">
              <InputNumber></InputNumber>
            </Form.Item>
            <Form.Item label="Account Username">
              <Input></Input>
            </Form.Item>
            <Form.Item label="Account Password">
              <Input></Input>
            </Form.Item>
            <Form.Item label="Repeat Password">
              <Input></Input>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={{ textAlign: "center" }}>Team SYGU ©2019</Footer>
      </Layout>
    );
  }
}
export default Form.create({ name: "add client" })(AddClientForm);
