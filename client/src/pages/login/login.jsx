import "./login.styles.scss";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
function Login() {
  const [form] = Form.useForm();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 login__form_wrapper py-3 rounded">
          <div className="font-light">
            Welcome Back
            <strong className="ms-1 font-medium">Login Now</strong>
          </div>
          <div className="mt-3">
            <Form form={form} className="" layout="vertical">
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
                Do not have an account ?<Link to={ROUTES.SIGNUP}>Sign up</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
