<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Add City</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="saveCity" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Choose a State</label>
                            <select class="form-control" name="state" v-model="city.state">
                                <option :value="undefined" disabled selected >Select State</option>
                                <option v-for="state in states" :key="state.id" :value="state.id">{{state.name}}</option>
                            </select>
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">City Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter City Name" v-model="city.name">
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
    name: 'AddCity',
    data(){
        return {
            city:{},
            name:'',
            errors:[],
            states:'',
            state:'undefined'
        }
    },
    mounted(){        
        axios.get('http://localhost:8000/api/statesncountries').then(
            response=>{
            this.states = response.data.states;
            console.log(response.data.states);
        })
        .catch(error=>{           
            this.errors.push(error.response);
        });
    },
    methods: {
        async saveCity(){
            this.errors = [];
            if(!this.city.name){
                this.errors.push("Name is required");
            }
            if(!this.city.state){
                this.errors.push("state is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.city.name);
                formData.append('state_id', this.city.state);

                let url = "http://localhost:8000/api/cities";
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        this.city.name='';
                        this.city.state='undefined';
                        alert(response.data.message);
                        this.$router.push('/citylist'); 
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