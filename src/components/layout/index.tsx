import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

const { Content, Header, Sider } = Layout;

export default () => {
    const [menuItems, setMenuItems] = useState<MenuProps['items']>();

    useEffect(() => {
        const items: MenuProps['items'] = new Array(5).fill('').map((x, i) => {
            return {
                key: `sub_${i}`,
                label: `subnav ${i + 1}`,
                children: new Array(4).fill('').map((_, j) => {
                    const subKey = i * 4 + j + 1;
                    return {
                        key: subKey,
                        label: `option${subKey}`,
                    };
                }),
            };
        });

        setMenuItems(items);
    }, []);

    return (
        <Layout>
            <Header>header</Header>

            <Layout>
                <Sider breakpoint="lg" collapsible={true} width={300}>
                    <Menu className="menu" mode="inline" items={menuItems} />
                </Sider>
                <Layout>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
