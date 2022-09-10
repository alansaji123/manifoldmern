import React from "react";
import "./signup.styles.scss";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function SignUp() {
  const [form] = Form.useForm();

  return (
    <div className="container mt-3">
      <div className="row align-items-center justify-content-center signup__container">
        <div className="signup__wrapper col-6 py-3 rounded">
          <div className="font-light">
            New to Shoe Cart
            <strong className="ms-1 font-medium">Sign Up Now</strong>
          </div>
          <div className="mt-3 text-white">
            <Form form={form} className="" layout="vertical">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Name is required",
                  },
                ]}
                label="Name"
                name="name"
              >
                <Input />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Invalid email",
                  },
                ]}
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
                label="Password"
                name="password"
              >
                <Input type="password" />
              </Form.Item>
              <Form.Item name="password">
                <Button htmlType="submit" type="default">
                  Sign Up
                </Button>
              </Form.Item>
              <div className="d-flex align-items-center gap-3">
                Already have an account ?<Link to={ROUTES.LOGIN}>Login</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
