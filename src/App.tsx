import React, {Component} from 'react';
import logo from './logo.svg';
import s from './App.module.less';
//
import {Layout, Card} from 'antd';

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
    render() {
        return (
            <div className={s.App}>
                <Header className={s["App-header"]}>
                    <img src={logo} className={s["App-logo"]} alt="logo"/>
                    <p>Create-React-App, Ant Design, Typescript, less-modules example</p>
                    <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                </Header>
                <Content>
                    main content
                </Content>
                <Footer>
                    <small>Maxim Livshitz 2019</small>
                </Footer>
            </div>
        );
    }
}

export default App;
