<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Add Model</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="saveModel" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Model Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter Model Name" v-model="model.name">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Description</label>
                            <input type="text" class="form-control" name="description" placeholder="Enter Model Description" v-model="model.description">
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
    name: 'AddModel',
    data(){
        return {
            model:{},
            name:'',
            errors:[]
        }
    },
    methods: {
        async saveModel(){
            this.errors = [];
            if(!this.model.name){
                this.errors.push("Name is required");
            }
            if(!this.model.description){
                this.errors.push("Description is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.model.name);
                formData.append('description', this.model.description);

                let url = "http://localhost:8000/api/robotmodels";
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        this.model.name='';
                        alert(response.data.message);
                        this.$router.push('/modellist'); 
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