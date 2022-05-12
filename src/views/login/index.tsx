import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
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
    /**
     * 登录方法
     */
    const login = () => {};

    return (
        <div className="login-container">
            <div className="login-group login-form">
                <div className="box">
                    <h2>登录</h2>

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

                    <Button type="primary" shape="round" loading={loading} onClick={login}>
                        登录
                    </Button>
                </div>
            </div>
            <div className="login-group registered-form">
                <div className="box">
                    <h2>注册新账号!</h2>
                    <p>输入你的信息注册账号！</p>
                    <Button
                        type="ghost"
                        shape="round"
                        loading={loading}
                        onClick={() => navigate('/registered')}
                    >
                        注册
                    </Button>
                </div>
            </div>
        </div>
    );
}
