import { Button, Form, Input, InputNumber, Spin, message } from "antd";
import { useState } from "react";

const CreateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(response);
      if (response.ok) {
        message.success("Coupon created successfully.");
        form.resetFields();
      } else {
        message.error("Error while creating the coupon!");
      }
    } catch (error) {
      console.log("Coupon create error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Coupon Code"
          name="code"
          rules={[
            {
              required: true,
              message: "Please enter a coupon code!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Coupon Discount Rate"
          name="discountPercent"
          rules={[
            {
              required: true,
              message: "Please enter a coupon discount rate!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateCouponPage;
