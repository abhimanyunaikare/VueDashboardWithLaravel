<template>
    <div class="container" style=" padding-top:20px;">
        <h2>Edit Robot</h2>
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="updateRobot" novalidate>
                    <fieldset>
                        <form-group>
                            <label for="" class="form-label mt-4">Choose a User</label>
                            <select class="form-control" name="user" v-model="user">
                                <option :value="undefined" disabled>Select User</option>
                                <option v-for="user in users" :key="user.id" :value="user.id"  :selected="robot.user_id==user.id">{{user.name}}</option>
                            </select>
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Choose a City</label>
                            <select class="form-control" name="city" v-model="city">
                                <option :value="undefined" disabled>Select City</option>
                                <option v-for="city in cities" :key="city.id" :value="city.id"  :selected="robot.city_id==city.id">{{city.name}}</option>
                            </select>
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Choose a Model</label>
                            <select class="form-control" name="model" v-model="model">
                                <option :value="undefined" disabled >Select Model</option>
                                <option v-for="model in models" :key="model.id" :value="model.id"  :selected="robot.model_id==model.id">{{model.name}}</option>
                            </select>
                        </form-group>


                        <form-group>
                            <label for="" class="form-label mt-4">Robot Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter Robot Name" v-model="robot.name">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Description</label>
                            <input type="text" class="form-control" name="description" placeholder="Enter Robot Description" v-model="robot.description">
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
    name: 'EditRobot',
    data(){
        return {
            robot:{},
            name:'',
            errors:[],
            users:'',
            user:'undefined',
            models:'',
            model:'undefined',
            cities:'',
            city:'undefined',  
        }
    },
    created(){
        this.getRobotById();
        this.getUsers();
        this.getModels();
        this.getCities();
    },
    methods: {
        async getRobotById(){
            let url = `http://localhost:8000/api/robots/${this.$route.params.id}`;
            await axios.get(url).then(response=>{
                console.log(response);
                this.robot = response.data;
                this.user=response.data.user_id;
                this.model=response.data.robotmodel_id;
                this.city=response.data.city_id;
            })
        },
        async getUsers(){
            axios.get('http://localhost:8000/api/allusers').then(
                response=>{
                this.users = response.data.users;
                console.log(response.data.users);
            })
            .catch(error=>{           
                this.errors.push(error.response);
            });
        },
        async getModels(){                
            axios.get('http://localhost:8000/api/robotmodels').then(
                response=>{
                this.models = response.data.robotmodels;
                console.log(response.data.robotmodels);
            })
            .catch(error=>{           
                this.errors.push(error.response);
            });
        },
        async getCities(){                
            axios.get('http://localhost:8000/api/cities').then(
                response=>{
                this.cities = response.data.cities;
                console.log(response.data.cities);
            })
            .catch(error=>{           
                this.errors.push(error.response);
            });
        },
        async updateRobot(){
            this.errors = [];
            if(!this.robot.name){
                this.errors.push("Name is required");
            }
            if(!this.robot.description){
                this.errors.push("description is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('name', this.robot.name);
                formData.append('description', this.robot.description);
                formData.append('robotmodel_id', this.model);
                formData.append('city_id', this.city);
                formData.append('user_id', this.user);

                let url = `http://localhost:8000/api/robots/${this.$route.params.id}`;
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        alert(response.data.message);
                        this.$router.push('/robotlist'); 
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