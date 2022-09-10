import Img from "../../assets/images/shoe1.png";
import "./cart.styles.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../../components/Button/button.component";
import { BsArrowRightShort } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Modal, Form, Input, Checkbox } from "antd";
import { BsPatchCheckFill } from "react-icons/bs";

function Cart() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [placeOrderStatus, setPlaceOrderStatus] = useState(false);
  const [form] = Form.useForm();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <h4 className="text-primary">Cart Summary</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th className="w-50">Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.length > 0 &&
                  cartItems.map((cartItem, cartItemIndex) => {
                    return (
                      <tr key={cartItem.id}>
                        <td className="align-middle">
                          <img
                            className="img-fluid cart__product_img"
                            src={Img}
                            alt=""
                          />
                          <span className="text-sm font-normal">
                            {cartItem.name}
                          </span>
                        </td>
                        <td className="align-middle">{cartItem.price}</td>
                        <td className="align-middle">{cartItem.quantity}</td>
                        <td className="align-middle">
                          {cartItem.price * cartItem.quantity}
                        </td>
                        <td className="align-middle">
                          <AiFillCloseCircle
                            onClick={() => {
                              removeItemFromCart(cartItem.id);
                            }}
                            className="text-danger text-xl"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-5">
          <div className="card px-3 py-3">
            <div className="d-flex align-items-center justify-content-between">
              <span>Total Items</span>
              <span>1</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <span>Sub Total</span>
              <span>12000</span>
            </div>
            <div className="mt-3 text-end">
              <Button
                onClick={() => setShowOrderModal(true)}
                className="px-5"
                variant="secondary"
              >
                <div className="d-flex align-items-center">
                  <span>Check out</span>
                  <BsArrowRightShort className="text-3xl" />
                </div>
              </Button>
              <Modal
                centered={true}
                footer={null}
                visible={showOrderModal}
                onCancel={() => setShowOrderModal(false)}
              >
                {!placeOrderStatus ? (
                  <div className="my-3">
                    <div className="mb-3 mt-5">
                      <Form layout="vertical" form={form}>
                        <Form.Item label="Name" name="name">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Mobile" name="mobile">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address" name="address">
                          <Input.TextArea />
                        </Form.Item>
                      </Form>
                      <div className="d-flex align-items-center gap-3">
                        <Checkbox defaultChecked={true} />
                        <span>Pay on delivery</span>
                      </div>
                      <div className="mt-3">
                        <h5 className="text-primary">Order Summary : 5000</h5>
                      </div>
                    </div>
                    <div className="text-end mt-3">
                      <Button
                        onClick={() => setPlaceOrderStatus(true)}
                        variant="secondary"
                        className="px-5 py-3"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="order__place_success_wrapper">
                    <h5 className="text-success">Order Placed Successfully</h5>
                    <div>
                      <BsPatchCheckFill className="text-success text-7xl success__icon" />
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
