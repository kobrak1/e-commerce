import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="Avatar"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (e) => <p style={{ fontWeight: "bold" }}>{e}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteUser(record.email)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  // a function to fetch user data
  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/users`);

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
    fetchUsers();
  }, [fetchUsers]);

  // to send e request to delete a user by its email
  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("User successfully removed");
        fetchUsers();
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

export default UserPage;
