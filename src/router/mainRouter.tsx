import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '@/views/login';
import Registered from '@/views/registered';
import IndexHome from '@/components/layout';
import IndexPage from '@/views/indexPage/indexPage';
import { NotFound } from '@/components/not-found-component';

// 懒加载
// const Login = lazy(() => import('@/views/login'));
// const Registered = lazy(() => import('@/views/registered'));

/**
 * 项目主路由
 * @returns 返回路由
 */
export function MainRoter() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate to="login" />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: 'registered',
            element: <Registered />,
        },
        {
            path: 'page',
            element: <IndexHome />,
            children: [
                {
                    path: '',
                    element: <Navigate to="index" />,
                },
                {
                    path: 'index',
                    element: <IndexPage />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
}
