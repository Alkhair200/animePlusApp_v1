<template>
    <div>
        <!-- start sidebar -->
        <section class="sidebar side-width">
            <div class="side-content">

                <div class="toggle-icon">
                    <i class="fa fa-navicon"></i>
                </div>

                <div class="user">
                    <div class="user-info">
                        <a href="profile.html">
                            <img class="" src="front/img/user_profile.png" alt="">
                        </a>
                        <a href="profile.html" style="all: unset; cursor: pointer;">
                            <h6 class="name">Alkahir Abdelmoneim</h6>
                        </a>
                        <p class="email">test@gmail.com &nbsp;- <span>تم التحقق</span></p>
                        <p class="sign-out">
                            <i class="fa fa-sign-out"></i>
                        </p>
                    </div>

                    <router-link to="/profile" class="btn">تعديل الملف الشخصي</router-link>
                    <a href="https://animeeplus.net/subscriptions/" class="btn subsc-btn">إشتراك الاَن</a>

                    <div class="social-media">
                        <span>
                            <i class="fa fa-telegram"></i>
                        </span>
                        <span>
                            <i class="fa fa-instagram"></i>
                        </span>
                        <span>
                            <i class="fa fa-twitter"></i>
                        </span>
                        <span>
                            <i class="fa fa-facebook"></i>
                        </span>
                    </div>
                </div>
                <div class="list-view">
                    <ul>
                        <li>
                            <i class="fa fa-clock-o"></i>
                            <a href="index.html">
                                مواعيد إصدار الحلقات
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-fire"></i>
                            <a href="index.html">
                                اخر الحلقات
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-fire"></i>
                            <a href="index.html">
                                اخر حلقات الكرتون
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-heart"></i>
                            <a href="fav.html">
                                قائمتي
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-exclamation-circle"></i>
                            <a href="index.html">
                                الإقتراحات
                            </a>
                        </li>

                        <li>
                            <i class="fa fa-share-alt"></i>
                            <a href="index.html">
                                شارك الموقع
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="mt-3"></div>

        </section>
        <!-- End sidebar -->
    </div>
</template>