<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>States</h2>
            <router-link  :to="{name:'AddState'}" class="btn alert-primary btn-sm">Add State</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">State Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="state in states" :key="state.id">
                <tr class="table-secondary">
                <th scope="row">{{state.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditState', params:{id: state.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteState(state.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'StateList',
    data(){
        return {
            states:Array,
        }
    },
    created(){
        this.getStates();
    },
    methods: {
        async getStates(){
            let url = 'http://localhost:8000/api/states';
            await axios.get(url).then(response =>{
                this.states = response.data.states;
                console.log(this.states);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteState(id){
            let url = 'http://localhost:8000/api/states/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getStates();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('State List mounted');
    }
}
</script>