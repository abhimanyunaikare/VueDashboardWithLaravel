<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="saveUser" novalidate>
                    <fieldset>

                        <form-group>
                            <label for="" class="form-label mt-4">Company Name</label>
                            <input type="text" class="form-control" name="company" placeholder="Enter Company Name" v-model="user.company">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Contact Name</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Enter Name" v-model="user.name">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email" v-model="user.email">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Password</label>
                            <input type="text" class="form-control" name="password" id="password" placeholder="Enter password" v-model="user.password">
                        </form-group>

                        <form-group>
                            <label for="" class="form-label mt-4">Password Confirmation</label>
                            <input type="text" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Enter password again" v-model="user.password_confirmation">
                        </form-group>

                            <input type="text"  class="form-control"  name="status" hidden  v-model="user.status">
                            <input type="text"  class="form-control" name="role" hidden v-model="user.role">

                        <form-group>
                            <label for="" class="form-label mt-4">Phone</label>
                            <input type="text" class="form-control" name="phone" placeholder="Enter Phone" v-model="user.phone">
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
    name: 'AddUser',
    data(){
        return {
            user:{},
            company:'',
            name:'',
            email:'',
            phone:'',
            password:'',
            password_confirmation:'',
            role:'client',
            status:'1',
            errors:[]
        }
    },
    methods: {
        async saveUser(){
            this.errors = [];
            if(!this.user.name){
                this.errors.push("Name is required");
            }
            if(!this.user.company){
                this.errors.push("Company Name is required");
            }
            if(!this.user.email){
                this.errors.push("Email is required");
            }
            if(!this.user.phone){
                this.errors.push("Phone is required");
            }
            if(!this.user.password){
                this.errors.push("Password is required");
            }
            if(!this.user.password_confirmation){
                this.errors.push("Password Confirmation is required");
            }
            
            if(!this.errors.length){
                let formData = new FormData();
                formData.append('company', this.user.company);
                formData.append('name', this.user.name);
                formData.append('email', this.user.email);
                formData.append('phone', this.user.phone);
                formData.append('password', this.user.password);
                formData.append('password_confirmation', this.user.password_confirmation);
                formData.append('role', 'client');
                formData.append('status', '1');

                let url = "http://localhost:8000/api/register";
                await axios.post(url, formData).then((response)=>{
                    console.log(response);
                    if(response.status ==200){
                        this.user.company='';
                        this.user.name='';
                        this.user.email='';
                        this.user.phone='';
                        this.user.role='client';
                        this.user.status='1';
                        this.user.password='';
                        this.user.password_confirmation='';
                        alert(response.data.message);
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