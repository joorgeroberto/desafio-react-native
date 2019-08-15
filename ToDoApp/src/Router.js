//Aqui, ficam todos os componentes que podem ser acessados com o navigation.

import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import ToDoForm from './components/smartComponents/ToDoForm'
import CreateToDo from './components/smartComponents/CreateToDo'
//import DrawerContent from './components/presentationComponents/DrawerContent';
//import Gallery from './components/smartComponents/Gallery';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="main" >{/*Esta cena é usada para que o login nao seja acessado por mais ninguem q não esteja na mesma cena que ele.*/}
                    <Scene
                        hideNavBar
                        key="ToDoForm"
                        component={ToDoForm}
                        title="Tasks"
                        //initial
                    />
                    <Scene
                        initial
                        hideNavBar
                        key="createToDo"
                        component={CreateToDo}
                        title="Tasks"
                    />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;