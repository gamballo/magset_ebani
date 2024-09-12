import {Alert, Button, Input, Layout, List, Typography,} from "antd";
import {notification} from "antd";
import {useState} from "react";

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;
import {Modal} from "antd";
import z from "./count.module.css"


export const Counter = () => {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [minValue, setMinValue] = useState(0);
    const [product, setProduct] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [Weigth, setWeigth] = useState("");
    const [Height, setHeight] = useState("");
    const [Itm, setItm] = useState("");
    const [Result, setResult] = useState("");
    const calculateBMI = () => {
        const heightInMeters = parseFloat(Height) / 100;
        const bmiValue = (parseFloat(Weigth) / (heightInMeters * heightInMeters)).toFixed(2);
        setItm(bmiValue);

        let itmresult = ""

        if (+bmiValue < 18.5) {
            itmresult = 'ты МИНИПИГ';
        } else if (+bmiValue < 24.9) {
            itmresult = 'ты КАБАН';
        } else if (+bmiValue < 29.9) {
            itmresult = 'ты БОРОВ';
        } else {
            itmresult = 'ты ТУРБОСВИН';
        }

        setResult(itmresult)
    }

    const addProduct = () => {
        console.log(product);
    }

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

        return count >= maxValue ?
            notification.warning({
                message: "ПАШОК ХУЙ СОСИ",
                description: "не пон?",
                placement: "topRight",
            })
            : setCount(count + 1);
    }
    const minus = () => {
        return count <= minValue ?
            notification.warning({
                message: "ПАШОК ХУЙ СОСИ",
                description: "не пон?",
                placement: "topRight",
            })
            : setCount(count - 1);
    }
    return (
        <Layout className={"layout_styles"}>
            <Header style={{padding: '0 20px'}}>
                <Title level={3}
                       style={{color: "white"}}>
                    аво
                </Title>
            </Header>
            <Content className={"content"}>
                <div className={"z.count"}>
                    <Title>Текущий счет {count}</Title>
                    <div>
                        <Button type={"primary"}
                                className={"primaryBtn"}
                                onClick={plus}>Увеличить</Button>
                        <Button onClick={minus}
                                type={"primary"}
                                className={"primaryBtn"}>Уменьшить</Button>
                        <Button onClick={showModal}
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
                </div>
                <div className={"z.imt"}>
                    <Title>Узнать какой ты свин</Title>
                    <div>
                        <Button onClick={showModal}
                                className={"primaryBtn"}>модалка</Button>
                        <Modal title="Basic Modal"
                               open={isModalOpen}
                               onOk={handleOk}
                               onCancel={handleCancel}>
                            <div><Title>KALculator ИТМ</Title></div>
                            <div className={"z.section_input1"}>
                                <div className={z.sec_text1}> Вес</div>
                                <Input type={"number"} value={Weigth} onChange={(e) => setWeigth(e.target.value)}/>
                            </div>
                            <div className={"z.section_input2"}>
                                <div className={z.sec_text2}> Рост</div>
                                <Input type={"number"} value={Height} onChange={(e) => setHeight(e.target.value)}/>
                            </div>
                            <div className={z.sec_btn}>
                                <Button type={"primary"}
                                        className={"primaryBtn"}
                                        onClick={calculateBMI}
                                >Расчитать ИТМ
                                </Button>
                                {Itm && (<div className={z.result}>
                                    <Alert message={`итм = ${Itm}
                                по факту ${Result}`}/>
                                    {/*cпросить как переносить текст в мессадже*/}
                                </div>)}
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className={"z.list"}>
                    <Title>список покупок минипига</Title>
                    <div>
                        <Button onClick={showModal}
                                className={"primaryBtn"}>нажми чтобы узнать что хочет пиг</Button>
                        <Modal title="Basic Modal"
                               open={isModalOpen}
                               onOk={handleOk}
                               onCancel={handleCancel}>
                            <div><Title>список хотелок в стиме</Title></div>
                            <div className={"z.section_input3"}>
                                <div className={z.sec_text3}> ШО ТЫ ХОЧЕШЬ ОТ МЕНЯ</div>
                                <Input style={{marginBottom: "20px"}}
                                       value={product}
                                       onChange={(e) => setProduct(...e, [e.target.value])}
                                />
                                <Button className={"primaryBtn"}
                                        onClick={addProduct}>ДОБАВИТЬ</Button>
                            </div>
                            <div className={"z.list1"} style={{marginTop: "20px"}}>

                            </div>
                        </Modal>
                    </div>
                </div>
            </Content>
            <Footer className={"footer"}>123</Footer>
        </Layout>
    )
}