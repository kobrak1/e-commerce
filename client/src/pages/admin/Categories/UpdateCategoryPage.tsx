import { Button, Form, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCategoryPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const categoryId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      // check if response status ok
      if (response.ok) {
        message.success("Category update successfull.");
      } else {
        message.error("Error while updating the category.");
      }
    } catch (error) {
      console.log("Category update error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSingleCategory = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();

        if (data) {
          form.setFieldsValue({
            name: data.name,
            img: data.img,
          });
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCategory();
  }, [apiUrl, categoryId, form]);

  return (
    <Spin spinning={loading}>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter the category name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Image (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please enter the image url!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </Spin>
  );
};

export default UpdateCategoryPage;
