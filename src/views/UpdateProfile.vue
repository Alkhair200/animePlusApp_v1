<template>
    <div>
    <!-- <div class="overlay"></div> -->
    <div class="container-lg container-fluid bootstrap snippets bootdeys">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-8">
                <form class="form-horizontal">
                    <div class="panel panel-default " style="margin-bottom: 120px;">
                        <div class="panel-body text-center position-relative" style="height: 250px;">
                            <label class="w-100 h-100 " for="background-input">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                    class="w-100 h-100 profile-background" alt="User background">
                            </label>
                            <input class="d-none" id="background-input" type="file" />
                            <label for="avatar-input">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                    class="rounded-circle profile-avatar" alt="User avatar">
                            </label>
                            <input class="d-none" id="avatar-input" type="file" />
                        </div>
                    </div>
                    <div class="panel panel-default">

                        <div class="panel-body row w-100">
                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input">
                                <label for="username">الأسم</label>
                                <i class="input-icon fa fa-user"></i>
                            </div>

                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input">
                                <label for="username">فيسبوك</label>
                                <i class="input-icon fa fa-facebook"></i>
                            </div>

                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input" >
                                <label for="username">العنوان</label>
                                <i class="input-icon fa fa-map-marker"></i>
                            </div>

                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input">
                                <label for="username">تاريخ الميلاد</label>
                                <i class="input-icon fa fa-calendar"></i>
                            </div>

                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input" >
                                <label for="username">السيره الذاتيه</label>
                                <i class="input-icon fa fa-copy"></i>
                            </div>

                            <div class="input-box col-12">
                                <input type="text" placeholder="" class="input">
                                <label for="username">كلمه السر</label>
                                <i class="input-icon fa fa-lock"></i>
                            </div>

                            <div class="form-group row  mb-1">
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">تحــديــث</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>