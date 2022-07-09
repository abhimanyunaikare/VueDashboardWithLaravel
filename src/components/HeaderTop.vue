<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#4e73df">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="#">{{title}}</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <router-link class="nav-link active" to="/">Home
                    <span class="visually-hidden">(current)</span>
                </router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Regions</router-link>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/countrylist">Countries</router-link>
                        <router-link class="dropdown-item" to="/statelist">States</router-link>
                        <router-link class="dropdown-item" to="/citylist">Cities</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#">Admin Users</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Users</router-link>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/userlist">List All</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#">Admin Users</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Models</router-link>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/modellist">List All</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#">Admin Users</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Robot</router-link>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/robotlist">List All</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#">Admin Users</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Sensors/Parameters</router-link>
                    <div class="dropdown-menu">
                        <router-link class="dropdown-item" to="/parameterlist">List All</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item" to="#">Admin Users</router-link>
                    </div>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/dash">Dashboard</router-link>
                </li>
                
            </ul>
            
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderTop',
    props: {
        title: String
    }
}
</script>