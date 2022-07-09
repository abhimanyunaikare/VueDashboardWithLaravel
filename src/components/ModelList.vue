<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>Models</h2>
            <router-link  :to="{name:'AddModel'}" class="btn alert-primary btn-sm">Add Model</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Model Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="model in models" :key="model.id">
                <tr class="table-secondary">
                <th scope="row">{{model.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditModel', params:{id: model.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteModel(model.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ModelList',
    data(){
        return {
            models:Array,
        }
    },
    created(){
        this.getModels();
    },
    methods: {
        async getModels(){
            let url = 'http://localhost:8000/api/robotmodels';
            await axios.get(url).then(response =>{
                this.models = response.data.robotmodels;
                console.log(this.robotmodels);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteModel(id){
            let url = 'http://localhost:8000/api/robotmodels/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getModels();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('Model List mounted');
    }
}
</script>