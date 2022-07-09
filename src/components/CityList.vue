<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>Cities</h2>
            <router-link  :to="{name:'AddCity'}" class="btn alert-primary btn-sm">Add City</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">City Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="city in cities" :key="city.id">
                <tr class="table-secondary">
                <th scope="row">{{city.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditCity', params:{id: city.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteCity(city.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CityList',
    data(){
        return {
            cities:Array,
        }
    },
    created(){
        this.getCities();
    },
    methods: {
        async getCities(){
            let url = 'http://localhost:8000/api/citiesnstatesncountries';
            await axios.get(url).then(response =>{
                this.cities = response.data.cities;
                console.log(this.cities);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteCity(id){
            let url = 'http://localhost:8000/api/cities/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getCities();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('City List mounted');
    }
}
</script>