<template>
    <div><!-- section intro -->
    <section id="intro">
      <div class="featured">
        <div class="wrapper">

          <div class="row">
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

    <!-- section contact -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="span8">
            <h4>Request an Appointment</h4>

            <form method="post" class="contactForm">

              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>

              <div class="row">
                <div class="span4 field form-group">
                  <input type="text" name="name" placeholder="* Enter your full name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="span4 field form-group">
                  <input type="text" name="email" placeholder="* Enter your email address" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="span8 margintop10 field form-group">
                  <input type="text" name="subject" placeholder="Enter your subject" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="span8 margintop10 field form-group">
                  <textarea rows="12" name="message" class="input-block-level" placeholder="* Your message here..." data-rule="required" data-msg="Please write something"></textarea>
                  <div class="validation"></div>

                  <p>
                    <button class="btn btn-theme btn-medium margintop10 pull-left" type="submit">Send message</button>
                    <span class="pull-right margintop20">* Please fill all required form field, thanks!</span>
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div class="span4">
            <div class="clearfix"></div>
            <aside class="right-sidebar">

              <div class="widget">
                <h5 class="widgetheading">Contact information<span></span></h5>

                <ul class="contact-info">
                  <li><label>Address :</label> Le Palm Building<br /> Tank Hill Road Muyenga</li>
                  <li><label>Phone :</label>+256 123 456 78 / +256 123 456 79</li>
                  
                  <li><label>Email : </label> info@jbc .com</li>
                </ul>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <!-- end section contact -->

    <!-- footer -->
    <footer>
      <div class="footer">
        <div class="wrapper">
          <div class="social">
            <a href="#" class="fb"> </a> <a href="#" class="tw"> </a>
          </div>

          <div class="subfooter">
            <ul>
              <li><a href="#">Home</a> &#45; </li>
              <li><a href="#">Terms conditions</a> &#45; </li>
              <li><a href="#">Contact</a></li>
            </ul>
            <p class="copyright">&#169; Copyright. All rights reserved</p>

          </div>
          <div class="credits">
          
            Designed by <a href="#">FANNY</a>
          </div>
        </div>
      </div>
    </footer>


    </div>

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
