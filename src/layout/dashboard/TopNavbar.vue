<template>
    <div class="navbar">
        <div id="header-2">
            <div class="logo">
                <div class="contacts">
                    <img src="@/assets/user-1.jpg" alt="">
                    <img src="@/assets/user-1.jpg" alt="">
                    <img src="@/assets/user-1.jpg" alt="">
                    <button class="share">Share</button>
                    <button class="chat"><i class="fas fa-comments"></i>Chat</button>
                </div>
                <div class="name-logo">
                    <img src="@/assets/image-logo.png" alt="">
                    <p>Website Redesign</p>
                </div>
            </div>

            <div class="navigation">
                <ul>
                    <li><a href="#" v-on:click="openbox('card-tasks')">Tasks</a></li>
                    <li><a href="">Kanban</a></li>
                    <li><a href="#" v-on:click="openbox('card-activity')">Activity</a></li>
                    <li><a href="">Calendar</a></li>
                    <li><a href="">Files</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top-navbar",
        methods: {
            openbox(id) {
                var all = document.querySelectorAll(".card");
                for (var i = 0; i < all.length; i++) {
                    if (all[i].id == id) {
                        all[i].style.display = 'block'
                    } else {
                        all[i].style.display = 'none';
                    }
                }
            }
        }
    }
</script>

<style>
    .navbar {
        width: 80%;
        float: right;

    }

</style>