<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/">4 values and the 12 principles of Agile Software Development.</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" id="add" to="/add">Add Agile Types</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">View Agile Types</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  font-family: Montserrat;
}

#add {
  margin-right: 20px;
}

.navbar-brand, .navbar-nav {
  font-size: 15px !important;
  text-transform: uppercase;
  letter-spacing: .5px;
}

.success {
    background: #198754;
    margin-top: 20px;
    color: #fff;
}


</style>
