<template>
    <div class="sidebar menu_box">
        <div id="header-1">
            <img src="@/assets/menu-logo.png" alt="">
            <p>PROJECTUS</p>
        </div>
        <div id="user" v-for="user in users" :key="user.name">
            <img class="user-avatar" src="@/assets/user-1.jpg" alt="">
            <div class="user-name">
                <h5> {{user.name}} </h5>
                <h6> {{user.status}} </h6>
            </div>
        </div>
        <div id="tasks" v-for="task in tasks" :key="task.name">
            <div class="rightcol">
                <h3 class="open-tasks"> {{task.open}} </h3>
                <h6>Open Tasks</h6>
            </div>
            <div class="leftcol">
                <h3 class="completed-tasks" v-on:click="completeTask()"> {{task.completed}} </h3>
                <h6>Completed Tasks</h6>
            </div>
        </div>
        <div id="menu">
            <div class="header">MENU</div>
            <ul class="v-menu">
                <li><a href="">Home</a></li>
                <li><a href="">My Tasks</a></li>
                <li><a href="">Notifications<p class="notifications">3</p></a></li>

            </ul>
        </div>
    </div>
</template>

<script>
    var completedTasks = document.querySelector('.completed-tasks');
    var openTasks = document.querySelector('.open-tasks');

    export default {
        name: "sidebar",
        data() {
            return {
                users: [
                    {
                        name: "Jean Gonzales",
                        status: "Product Owner"
                    }
                ],
                tasks: [
                    {
                        open: "2",
                        completed: "237"
                    }
                ],
            }
        },
        methods: {
            completeTask() {
                completedTasks = document.querySelector('.completed-tasks').innerHTML;
                openTasks = document.querySelector('.open-tasks').innerHTML;
                if (openTasks != 0) {
                    if (confirm("Are you sure you want to change the number of tasks?")) {
                        openTasks--;
                        completedTasks++;
                    } else {
                        alert("Cancel")
                    }
                    document.querySelector('.completed-tasks').innerHTML = completedTasks;
                    document.querySelector('.open-tasks').innerHTML = openTasks;
                }
            },
            imageClick(id) {
                document.querySelector('.notifications').innerHTML = id;
            },
        }
    }
</script>

<style scoped>
    .sidebar {
        height: 100%;
        width: 20%;
        background: #000000;
        float: left;
        overflow: hidden;
        position: fixed;
    }
    #header-1 img {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 19px;
        margin-right: 2%;
    }
</style>