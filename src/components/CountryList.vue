<template>
    <div class="container" style=" padding-top:20px;">
        <div>
            <h2>Countries</h2>
            <router-link  :to="{name:'AddCountry'}" class="btn alert-primary btn-sm">Add Country</router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Country Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="country in countries" :key="country.id">
                <tr class="table-secondary">
                <th scope="row">{{country.name}}</th>
                <th scope="row">
                    <router-link  :to="{name:'EditCountry', params:{id: country.id}}" class="btn alert-primary btn-sm">Edit</router-link></th>
                <th scope="row">   
                    <button class="btn alert-danger btn-sm" @click.prevent="deleteCountry(country.id)">Delete</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CountryList',
    data(){
        return {
            countries:Array,
        }
    },
    created(){
        this.getCountries();
    },
    methods: {
        async getCountries(){
            let url = 'http://localhost:8000/api/countries';
            await axios.get(url).then(response =>{
                this.countries = response.data.countries;
                console.log(this.countries);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteCountry(id){
            let url = 'http://localhost:8000/api/countries/'+id;
            await axios.delete(url).then(response =>{
                if(response.status ==200){
                    alert(response.data.message);
                    this.getCountries();
                }                
            }).catch(error => {
                console.log(error+id+' not found');
            });
        }
    },
    mounted() {
        console.log('Country List mounted');
    }
}
</script>