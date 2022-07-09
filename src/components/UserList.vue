<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Company</th>
                <th scope="col">Contact Person</th>
                <th scope="col">City</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="user.id">
                <tr class="table-secondary">
                <th scope="row">{{user.company}}</th>
                <th scope="row">{{user.name}}</th>
                <th scope="row">City</th>
                <th scope="row">{{user.email}}</th>
                <th scope="row">8888888888</th>
                <th scope="row">Active</th>
                <th scope="row"><router-link  :to="{name:'EditUser', params:{id: user.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row"><button class="btn alert-danger btn-sm" @click.prevent="deleteUser(user.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserList',
    data(){
        return {
            users:Array,
        }
    },
    created(){
        this.getUsers();
    },
    methods: {
        async getUsers(){
            let url = 'http://localhost:8000/api/allusers';
            await axios.get(url).then(response =>{
                this.users = response.data.users;
                console.log(this.users);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteUser(id){
            let url = 'http://localhost:8000/api/deluser/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getUsers();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('User List mounted');
    }
}
</script>