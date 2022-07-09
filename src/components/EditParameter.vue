<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Edit Parameter</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="updateParameter" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Parameter Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter Paramter Name" v-model="parameter.name">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Description</label>
                            <input type="text" class="form-control" name="description" placeholder="Enter Parameter Description" v-model="parameter.description">
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
    name: 'EditParameter',
    data(){
        return {
            parameter:{},
            name:'',
            errors:[]
        }
    },
    created(){
        this.getParameterById();
    },
    methods: {
        async getParameterById(){
            let url = `http://localhost:8000/api/parameters/${this.$route.params.id}`;
            await axios.get(url).then(response=>{
                console.log(response);
                this.parameter = response.data;
            })
        },
        async updateParameter(){
            this.errors = [];
            if(!this.parameter.name){
                this.errors.push("Name is required");
            }
            if(!this.parameter.description){
                this.errors.push("Description is required");
            }
            
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.parameter.name);
                formData.append('description', this.parameter.description);

                let url = `http://localhost:8000/api/parameters/${this.$route.params.id}`;
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        alert(response.data.message);
                        this.$router.push('/parameterlist'); 
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