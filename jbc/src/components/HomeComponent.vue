<template>
  <!-- section intro -->
    <section id="intro">
      <div class="featured">
        <div class="wrapper">

          <div class="row-fluid">
            <!-- slider -->
            <div class="span12">

              <div id="sequence-theme">
                <div id="sequence">
                  <img class="prev" src="../assets/images/bt-prev.png" alt="Previous Frame" />
                  <img class="next" src="../assets/images/bt-next.png" alt="Next Frame" />
                  <ul>
                    <li class="animate-in">
                      <h2 class="title">Junior Baby center</h2>
                      <h5 class="subtitle">Your Ultimate baby Sitter </h5>
                      <img class="model" src="../assets/images/SL-1.jpg" alt="" />
                    </li>
                    <li>
                      <h2 class="title">Make an Appointment</h2>
                      <h5 class="subtitle">For the Best Baby Sitting Services</h5>
                      <img class="model" src="../assets/images/sl-2.jpg" alt="" />
                    </li>
                    <li>
                      <h2 class="title">We get to you Immediately</h2>
                      <h5 class="subtitle">Your Baby Is Our Priority</h5>
                      <img class="model" src="../assets/images/sl-3.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <!-- end slider -->
          </div>

        </div>
      </div>
    </section>
</template>

<script>
export default {
  name:'app',
  mounted(){
    const customjs = require('../assets/js/custom.js')
    let injectedJs = document.createElement('script')
    injectedJs.textContent = customjs
    document.head.appendChild(injectedJs)
  },
}
</script>
<style src='../assets/css/style.css' scoped></style>
<style src='../assets/css/sequence.css' scoped></style>
<style src='../assets/css/bootstrap-responsive.css' scoped></style>
<!--style src='../assets/css/prettyPhoto.css' scoped></style-->
