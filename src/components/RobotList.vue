<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>Robots</h2>
            <router-link  :to="{name:'AddRobot'}" class="btn alert-primary btn-sm">Add Robot</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Robot Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="robot in robots" :key="robot.id">
                <tr class="table-secondary">
                <th scope="row">{{robot.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditRobot', params:{id: robot.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteRobot(robot.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RobotList',
    data(){
        return {
            robots:Array,
        }
    },
    created(){
        this.getRobots();
    },
    methods: {
        async getRobots(){
            let url = 'http://localhost:8000/api/robots';
            await axios.get(url).then(response =>{
                this.robots = response.data.robots;
                console.log(this.robots);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteRobot(id){
            let url = 'http://localhost:8000/api/robots/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getRobots();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('Robot List mounted');
    }
}
</script>