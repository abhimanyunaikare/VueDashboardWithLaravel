<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Edit Country</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="updateCountry" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Country Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter Country Name" v-model="country.name">
                        </form-group>

                        <button class="btn btn-primary mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditCountry',
    data(){
        return {
            country:{},
            name:'',
            errors:[]
        }
    },
    created(){
        this.getCountryById();
    },
    methods: {
        async getCountryById(){
            let url = `http://localhost:8000/api/countries/${this.$route.params.id}`;
            await axios.get(url).then(response=>{
                console.log(response);
                this.country = response.data;
            })
        },
        async updateCountry(){
            this.errors = [];
            if(!this.country.name){
                this.errors.push("Name is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.country.name);

                let url = `http://localhost:8000/api/countries/${this.$route.params.id}`;
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        alert(response.data.message);
                        this.$router.push('/countrylist'); 
                    }
                })
                .catch(error=>{           
                    this.errors.push(error.response);
                });
            }
        }
    }
}
</script>