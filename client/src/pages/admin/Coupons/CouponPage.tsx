import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CouponPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "code",
      key: "code",
      render: (code) => <b>{code}</b>,
    },
    {
      title: "Discount Rate",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (code) => <span>%{code}</span>,
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
            Güncelle
          </Button>
          <Popconfirm
            title="Delete Category"
            description="Are you sure that you want to delete the category?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCoupon(record._id)}
          >
            <Button type="primary" danger>
              Sil
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const fetchCategories = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/coupons`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Data fetch failed.");
      }
    } catch (error) {
      console.log("Data error:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteCoupon = async (couponId) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Category deleted successfully.");
        fetchCategories();
      } else {
        message.error("Delete failed.");
      }
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default CouponPage;