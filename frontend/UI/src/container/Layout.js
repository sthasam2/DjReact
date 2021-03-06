import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const customLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/">List</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content
                style={{
                    padding: "1rem 1rem",
                    background: "#ffffff",
                    margin: "1rem 1rem",
                }}
            >
                <div className="site-layout-content">{props.children}</div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default customLayout;
