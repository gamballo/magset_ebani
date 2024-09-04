import {Button, Layout, Typography, } from "antd";
import {notification} from "antd";
import {useState} from "react";
const {Header, Content, Footer} = Layout;
const {Title} = Typography;


export const ToyBox = () => {
    const  [count, setCount] = useState(0);
     const obnulit = () => {
         setCount(0) ;
    }
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        return count <=0 ?
            notification.warning({
                message: "хочешь конфетку",
                description: "пошли за дядей",
                placement: "topRight",
            })
            : setCount(count - 1);
    }
    return (
        <Layout className={"layout_styles"} >
            <Header style={{padding:'0 20px'}}>
                <Title level={3}
                       style={{color:"white"}} >
                    счеткик петушков
                </Title>
            </Header>
            <Content className={"content"}>
                <Title>Петушков у Пашка {count}</Title>
                <div>
                    <Button type={"primary"}
                            className={"primaryBtn"}
                            onClick={plus}>дать малышу чупик</Button>
                    <Button onClick={minus}>отобрать нехуй сосать</Button>
                    <Button onClick={obnulit} className={"primaryBtn1"}>дать по ебалу</Button>
                </div>
            </Content>
            <Footer className={"footer"}>123</Footer>
            <Footer>

            </Footer>
        </Layout>
    )
}