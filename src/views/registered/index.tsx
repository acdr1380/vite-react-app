import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
/**
 * 登录页面
 * @returns 登录页面视图
 */
export default function Login() {
    const [loginForm] = Form.useForm();
    const [loading, setLogin] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="registered-container">
            <div className="registered-group login-form">
                <div className="box">
                    <h2>欢迎回来!</h2>
                    <p>请先登陆您的个人信息，进行操作</p>
                    <Button
                        type="ghost"
                        shape="round"
                        loading={loading}
                        onClick={() => navigate('/login')}
                    >
                        登录
                    </Button>
                </div>
            </div>
            <div className="registered-group registered-form">
                <div className="box">
                    <h2>注册</h2>

                    <Form form={loginForm}>
                        <Form.Item
                            name="loginName"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                },
                            ]}
                        >
                            <Input placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入邮箱',
                                },
                            ]}
                        >
                            <Input placeholder="邮箱" />
                        </Form.Item>
                        <Form.Item
                            name="passWord"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ]}
                        >
                            <Input placeholder="密码" />
                        </Form.Item>
                    </Form>

                    <Button type="primary" shape="round" loading={loading}>
                        注册
                    </Button>
                </div>
            </div>
        </div>
    );
}
