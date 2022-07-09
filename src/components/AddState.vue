<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Add State</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="saveState" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Choose a Country</label>
                            <select class="form-control" name="country" v-model="state.country">
                                <option :value="undefined" disabled selected >Select Country</option>
                                <option v-for="country in countries" :key="country.id" :value="country.id">{{country.name}}</option>
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
    name: 'AddState',
    data(){
        return {
            state:{},
            name:'',
            errors:[],
            countries:'',
            country:'undefined'
        }
    },
    mounted(){        
        axios.get('http://localhost:8000/api/countries').then(
            response=>{
            this.countries = response.data.countries;
            console.log(response.data.countries);
        })
        .catch(error=>{           
            this.errors.push(error.response);
        });
    },
    methods: {
        async saveState(){
            this.errors = [];
            if(!this.state.name){
                this.errors.push("Name is required");
            }
            if(!this.state.country){
                this.errors.push("Country is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.state.name);
                formData.append('country_id', this.state.country);

                let url = "http://localhost:8000/api/states";
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        this.state.name='';
                        this.state.country='undefined';
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