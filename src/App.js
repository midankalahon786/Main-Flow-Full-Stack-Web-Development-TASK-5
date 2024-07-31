import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Card, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Logout', '6', <DesktopOutlined />),
];

const products = [
  { id: 1, name: 'Slim Fit Shirt for Men', description: '100% Pure Cotton', price: '$10', image: 'https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg' },
  { id: 2, name: 'Casual Full Shirt', description: '100% Pure Cotton', price: '$17', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4XrcpfJC1omvBC_VXaGIIYA9U_1v0YU-Bw&s' },
  { id: 3, name: 'Yellow Casual Full Shirt', description: 'Casual Shirt', price: '$15', image: 'https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/pale_yellow_cotton_solid_shirts_for_men_base_13_05_2023_700x933.jpg' },
  { id: 4, name: 'Navy Blue Men"s Shirt', description: '70% Cotton', price: '$22', image: 'https://images.meesho.com/images/products/379950119/jwr5k_256.webp' },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          Shoppy
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
              className="content"
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.name}
                  cover={<img alt={product.name} src={product.image} />}
                  style={{ borderRadius: '10px' }}
                >
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <Button type="primary" style={{ marginRight: '8px' }}>
                    Buy
                  </Button>
                  <Button>Add to Cart</Button>
                </Card>
              ))}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Midanka Lahon @2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
