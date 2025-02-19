import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const columns = [
    {
      title: "Category Image",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => <img src={imgSrc} alt="Avatar" width={100} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (e) => <p style={{ fontWeight: "bold" }}>{e}</p>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/categories/update/${record._id}`)}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCategory(record._id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // a function to fetch user data
  const fetchCategories = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/categories`);

      // check if the response is ok
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Failed to get user data!");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // to send e request to delete a user by its email
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("User successfully removed");
        fetchCategories();
      } else {
        message.error("Failed to remove");
      }
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      rowKey={(record) => record._id}
    />
  );
};

export default CategoryPage;
