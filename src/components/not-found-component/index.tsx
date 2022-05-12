import { Result } from 'antd';

export function NotFound() {
    return <Result status="404" title="404" subTitle="对不起，你找的网页不存在！" />;
}
