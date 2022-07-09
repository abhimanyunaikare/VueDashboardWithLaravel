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

                <form>
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
    name: 'EditUser',
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
    created(){
        this.getUserById();
    },
    methods: {
        async getUserById(){
            let url = `http://localhost:8000/api/getuser/${this.$route.params.id}`;
            await axios.get(url).then(response=>{
                console.log(response);
                this.user = response.data;
            })
        },
    },
    mounted: function(){
        console.log('Edit component Form Loaded...');
    }
}
</script>