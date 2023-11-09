<template>
  <div>
    <!-- Start navbar  navbarDark-->
    <nav class="navbar " style="box-shadow: none">
      <div class="container ">
        <div class="row" style="width: 100%;">        
          <div class="col-md-9 col-sm-9 text-center logo-img">
            <router-link class="navbar-brand" to="/">
              <img src="front/img/logo.png" alt="" srcset="">
            </router-link>
          </div>
          <div class="col-md-3 col-sm-3 nav-link-info">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="search">
                   <i class="fa fa-search"></i>
                </router-link >                  
              </li>

              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="fav">
                   <i class="fa fa-heart"></i>
                </router-link >              
              </li>
<!--               <li class="nav-item">
                <a class="nav-link buttons-effect border-right" href="index.html">
                  <i class="fa fa-cog"></i>
                </a>

              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- End navbar -->
  </div>
</template>