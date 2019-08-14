//Aqui, ficam todos os componentes que podem ser acessados com o navigation.

import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ToDoForm from './components/smartComponents/ToDoForm'
//import DrawerContent from './components/presentationComponents/DrawerContent';
//import Gallery from './components/smartComponents/Gallery';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="main" >{/*Esta cena é usada para que o login nao seja acessado por mais ninguem q não esteja na mesma cena que ele.*/}
                    <Scene
                        hideNavBar
                        key="ToDoForm"
                        component={ToDoForm}
                        title="Tasks"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;