import UserList from '../components/UserList.vue';
import AddUser from '../components/AddUser.vue';
import EditUser from '../components/EditUser.vue';
import CountryList from '../components/CountryList.vue';
import AddCountry from '../components/AddCountry.vue';
import EditCountry from '../components/EditCountry.vue';
import StateList from '../components/StateList.vue';
import AddState from '../components/AddState.vue';
import EditState from '../components/EditState.vue';
import CityList from '../components/CityList.vue';
import AddCity from '../components/AddCity.vue';
import EditCity from '../components/EditCity.vue';
import ModelList from '../components/ModelList.vue';
import AddModel from '../components/AddModel.vue';
import EditModel from '../components/EditModel.vue';
import RobotList from '../components/RobotList.vue';
import AddRobot from '../components/AddRobot.vue';
import EditRobot from '../components/EditRobot.vue';
import ParameterList from '../components/ParameterList.vue';
import AddParameter from '../components/AddParameter.vue';
import EditParameter from '../components/EditParameter.vue';
import HomePage from '../components/HomePage.vue';
import DashChart from '../components/DashChart.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    }, 
    {
        name: 'DashChart',
        path: '/dash',
        component: DashChart
    }, 
    {
        name: 'UserList',
        path: '/userlist',
        component: UserList
    },
    {
        name: 'AddUser',
        path: '/adduser',
        component: AddUser
    },
    {
        name: 'EditUser',
        path: '/user/edit/:id?',
        component: EditUser
    },
    {
        name: 'CountryList',
        path: '/countrylist',
        component: CountryList
    },
    {
        name: 'AddCountry',
        path: '/addcountry',
        component: AddCountry
    },
    {
        name: 'EditCountry',
        path: '/country/edit/:id?',
        component: EditCountry
    },
    {
        name: 'StateList',
        path: '/statelist',
        component: StateList
    },
    {
        name: 'AddState',
        path: '/addstate',
        component: AddState
    },
    {
        name: 'EditState',
        path: '/state/edit/:id?',
        component: EditState
    },
    {
        name: 'CityList',
        path: '/citylist',
        component: CityList
    },
    {
        name: 'AddCity',
        path: '/addcity',
        component: AddCity
    },
    {
        name: 'EditCity',
        path: '/city/edit/:id?',
        component: EditCity
    },
    {
        name: 'ModelList',
        path: '/modellist',
        component: ModelList
    },
    {
        name: 'AddModel',
        path: '/addmodel',
        component: AddModel
    },
    {
        name: 'EditModel',
        path: '/model/edit/:id?',
        component: EditModel
    },
    {
        name: 'RobotList',
        path: '/robotlist',
        component: RobotList
    },
    {
        name: 'AddRobot',
        path: '/addrobot',
        component: AddRobot
    },
    {
        name: 'EditRobot',
        path: '/robot/edit/:id?',
        component: EditRobot
    },
    {
        name: 'ParameterList',
        path: '/parameterlist',
        component: ParameterList
    },
    {
        name: 'AddParameter',
        path: '/addparameter',
        component: AddParameter
    },
    {
        name: 'EditParameter',
        path: '/parameter/edit/:id?',
        component: EditParameter
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;