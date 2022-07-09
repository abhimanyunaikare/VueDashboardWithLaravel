<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>Parameters</h2>
            <router-link  :to="{name:'AddParameter'}" class="btn alert-primary btn-sm">Add Parameter</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Parameter Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="parameter in parameters" :key="parameter.id">
                <tr class="table-secondary">
                <th scope="row">{{parameter.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditParameter', params:{id: parameter.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteParameter(parameter.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ParameterList',
    data(){
        return {
            parameters:Array,
        }
    },
    created(){
        this.getParameters();
    },
    methods: {
        async getParameters(){
            let url = 'http://localhost:8000/api/parameters';
            await axios.get(url).then(response =>{
                this.parameters = response.data.parameters;
                console.log(this.robotParameters);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteParameter(id){
            let url = 'http://localhost:8000/api/parameters/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getParameters();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('Parameter List mounted');
    }
}
</script>