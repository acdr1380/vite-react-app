import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoter } from './mainRouter';

/**
 * 路由入口
 * @returns 返回路由
 */
export default function () {
    return (
        <Router>
            <MainRoter />
        </Router>
    );
}
