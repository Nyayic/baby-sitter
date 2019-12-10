<template>
  <div class="card col-md-5 offset-3">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Register A Child</strong>
  </h5>

  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">

    <!-- Form -->
    <form class="" style="color: #757575;" action="#!" @submit.prevent="registerChild">
      <!-- First Name -->
      <div class="md-form">
          <label for="childFirstName">First Name</label>
        <input type="text" required id="childFirstName" class="form-control" v-model="child.childFirstName">
      
      </div>
      <!-- Last Name -->
      <div class="md-form">
          <label for="childLastName">Last Name</label>
        <input type="text" required id="childLastName" class="form-control" v-model="child.childLastName">
      
      </div>

      <!-- Telephone Contact -->
      <div class="md-form">
          <label for="childParentPhone">Parent's Telephone</label>
        <input type="number" required id="childParentPhone" class="form-control" v-model="child.childParentPhone">
      
      </div>



      <!-- Parent NAme -->
      <div class="md-form">
          <label for="childParentName">Parent's Name</label>
        <input type="text" required id="childParentName" class="form-control" v-model="child.childParentName">
      
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
         child:{} //starts with an empty object- two way data binding
        }
  },
  methods: {
    registerChild(){
      let uri = 'http://localhost:4000/children';

      this.axios.post(uri, this.child).then(() => {
        this.$router.push({name: 'childrens'})  //childrens is the collection name
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
