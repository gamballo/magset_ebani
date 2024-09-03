import './App.css'
import {Button, Layout, Typography} from "antd";
const {Header, Content, Footer} = Layout;
const {Title} = Typography;


function App() {

  return (
    <Layout className={"layout_styles"} >
        <Header style={{padding:'0 20px'}}>
            <Title level={3}
                   style={{color:"white"}} >
                аво
            </Title>
        </Header>
        <Content className={"content"}>
            <Title>Текущий счет</Title>
            <div>
                <Button type={"primary"} className={"primaryBtn"}>Увеличить</Button>
                <Button>Уменьшить</Button>
            </div>
        </Content>
        <Footer className={"footer"}>123</Footer>
        <Footer>

        </Footer>
    </Layout>
  )
}

export default App
