<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Edit State</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="updateState" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Choose a Country</label>
                            <select class="form-control" name="country" v-model="country">
                                <option :value="undefined" disabled >Select Country</option>
                                <option v-for="country in countries" :key="country.id"  :value="country.id" :selected="state.country_id==country.id">{{country.name}}</option>
                            </select>
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">State Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter State Name" v-model="state.name">
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
    name: 'EditState',
    data(){
        return {
            state:{},
            name:'',
            errors:[],
            country:'undefined',
            countries:Array,    
        }
    },
    created(){
        this.getStateById();
        this.getCountries();
    },
    methods: {
        async getStateById(){
            let url = `http://localhost:8000/api/states/${this.$route.params.id}`;
            await axios.get(url).then(response=>{
                console.log(response);
                this.state = response.data;
                this.country=response.data.country_id;
            })
        },
        async getCountries(){
            let url = 'http://localhost:8000/api/countries';
            await axios.get(url).then(response =>{
                this.countries = response.data.countries;
                console.log(this.countries);
            }).catch(error => {
                console.log(error);
            });
        },
        async updateState(){
            this.errors = [];
            if(!this.state.name){
                this.errors.push("Name is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.state.name);
                formData.append('country_id', this.country);

                let url = `http://localhost:8000/api/states/${this.$route.params.id}`;
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        alert(response.data.message);
                        this.$router.push('/statelist'); 
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