<template>
  <div class="card col-md-5 offset-3">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Register Staff member</strong>
  </h5>

  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">

    <!-- Form -->
    <form class="" style="color: #757575;" action="#!" @submit.prevent="registerStaff">
      <!-- First Name -->
      <div class="md-form">
          <label for="staffFirstName">First Name</label>
        <input type="text" required id="StaffFirstName" class="form-control" v-model="user.StaffFirstName">
      
      </div>
      <!-- Last Name -->
      <div class="md-form">
          <label for="staffLastName">Last Name</label>
        <input type="text" required id="StaffLastName" class="form-control" v-model="user.StaffLastName">
      
      </div>

      <!-- Telephone Contact -->
      <div class="md-form">
          <label for="staffFirstName">Telephone</label>
        <input type="number" required id="StaffTelephone" class="form-control" v-model="user.StaffTelephone">
      
      </div>



      <!-- Email -->
      <div class="md-form">
          <label for="LoginFormEmail">E-mail</label>
        <input type="email" required id="StaffEmail" class="form-control" v-model="user.StaffEmail">
      
      </div>

      <div class="md-form">
          <label for="LoginFormEmail">Roles</label>
        <input type="text" required id="StaffRole" class="form-control" v-model="user.StaffRole">
      
      </div>

      <!-- Password -->
      <div class="md-form">
        <label for="LoginFormPassword">Password</label>
        <input type="password" id="StaffPassword" required class="form-control" v-model="user.StaffPassword">
        
      </div>

      

      <!-- Sign in button -->
      <button class="btn btn-outline-info btn-rounded my-4 waves-effect z-depth-0" type="submit">Register</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-outline-danger btn-rounded my-4 waves-effect z-depth-0" type="reset">Cancel</button>

      <!-- Register -->
      

      
    </form>
    <!-- Form -->

  </div>

</div>
<!--  form login -->
  
</template>



<script>

export default {
  data(){
        return {
         user:{} //starts with an empty object- two way data binding
        }
  },
  methods: {
    registerStaff(){
      let uri = 'http://localhost:4000/register';

      this.axios.post(uri, this.user).then(() => {
        this.$router.push({name: 'registers'})  //registers is the collection name
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
