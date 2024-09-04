import {Button, Input, Layout, Typography,} from "antd";
import {notification} from "antd";
import {useState} from "react";
const {Header, Content, Footer} = Layout;
const {Title,Text} = Typography;
import {Modal} from "antd";


export const Counter = () => {
    const  [count, setCount] = useState(0);

    const [maxValue, setMaxValue] = useState(10);
    const [minValue, setMinValue] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const plus = () => {

        return count >=maxValue ?
            notification.warning({
                message: "ПАШОК ХУЙ СОСИ",
                description: "не пон?",
                placement: "topRight",
            })
            : setCount(count + 1);
    }
    const minus = () => {
        return count <=minValue ?
            notification.warning({
                message: "ПАШОК ХУЙ СОСИ",
                description: "не пон?",
                placement: "topRight",
            })
            : setCount(count - 1);
    }
    return (
        <Layout className={"layout_styles"} >
            <Header style={{padding:'0 20px'}}>
                <Title level={3}
                       style={{color:"white"}} >
                    аво
                </Title>
            </Header>
            <Content className={"content"}>
                <Title>Текущий счет {count}</Title>
                <div>
                    <Button type={"primary"}
                            className={"primaryBtn"}
                            onClick={plus}>Увеличить</Button>
                    <Button onClick={minus}>Уменьшить</Button>
                    <Button onClick={showModal}
                            type={"primary"}
                            className={"primaryBtn"}>модалка</Button>
                    <Modal title="Basic Modal"
                           open={isModalOpen}
                           onOk={handleOk}
                           onCancel={handleCancel}>
                        <div className={"section_input"}>
                            <Text> Задать минимальное число</Text>
                            <Input type={"number"} placeholder={'Минимальное число'}/>
                        </div>
                        <div className={"section_input"}>
                            <Text> Задать максимальное число</Text>
                            <Input type={"number"} placeholder={'Максимальное число'}/>
                        </div>
                    </Modal>
                </div>
            </Content>
            <Footer className={"footer"}>123</Footer>
            <Footer>

            </Footer>
        </Layout>
    )
}