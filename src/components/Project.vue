<template>
    <div class="container">
        <input id="menu__toggle" type="checkbox"/>
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>
        <div class="box-1 menu_box">
            <div id="header-1">
                <img src="./../assets/menu-logo.png" alt="">
                <p>PROJECTUS</p>
            </div>
            <div id="user" v-for="user in users" :key="user.name">
                <img class="user-avatar" :src="user.image" alt="">
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

        <div class="box-2">
            <div id="header-2">
                <div class="logo">
                    <div class="contacts">
                        <img src="./../assets/user-1.jpg" alt="">
                        <img src="./../assets/user-1.jpg" alt="">
                        <img src="./../assets/user-1.jpg" alt="">
                        <button class="share">Share</button>
                        <button class="chat"><i class="fas fa-comments"></i>Chat</button>
                    </div>
                    <div class="name-logo">
                        <img src="./../assets/image-logo.png" alt="">
                        <p>Website Redesign</p>
                    </div>
                </div>

                <div class="navigation">
                    <ul>
                        <li><a href="">Tasks</a></li>
                        <li><a href="">Kanban</a></li>
                        <li><a href="">Activity</a></li>
                        <li><a href="">Calendar</a></li>
                        <li><a href="">Files</a></li>
                    </ul>
                </div>
            </div>
            <div id="container">
                <div class="content">
                    <div class="day">TODAY</div>
                    <div class="activity-tasks" v-for="qwe in asd" :key="qwe.name">
                        <div class="box box-1">
                            <h1> {{qwe.task}} </h1>
                        <!--<h2></h2>-->
                        <!--<h3></h3>-->
                        </div>
                        <div class="box box-2">
                            <p> {{qwe.time}} </p>
                        </div>
                    </div>

                    <div class="task">
                        <p>During a project build, it is necessary to
                            evaluate the product design and development
                            against project requirements and outcomes</p>
                    </div>

                    <p class="image">
                        <img src="./../assets/image-1.jpg" alt="Фотография 1" width="100" height="100"
                             v-on:click="imageClick(0)">
                        <img src="./../assets/image-2.jpg" alt="Фотография 2" width="100" height="100"
                             v-on:click="imageClick(1)">
                        <img src="./../assets/image-3.jpg" alt="Фотография 3" width="100" height="100"
                             v-on:click="imageClick(2)">
                        <img src="./../assets/image-4.jpg" alt="Фотография 4" width="100" height="100"
                             v-on:click="imageClick(3)">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import project from './project.js'

    // export default {
    //   name: 'Project',
    //   props: {
    //     msg: String
    //   },
    // }
    let completedTasks = document.querySelector('.completed-tasks');
    let openTasks = document.querySelector('.open-tasks');

    export default {
        data() {
            return {
                users: [
                    {
                        image: require("./../assets/user-1.jpg"),
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
                asd: [
                    {
                        task: "Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
                        time: "8:40 PM"
                    },
                    {
                        task: "Emilee Simchenko commented on Account for teams and personal in bottom style",
                        time: "7:32 PM"
                    },
                    {
                        task: "Darika Samak uploaded 4 files on An option to search in current projects or in all projects",
                        time: "6:02 PM"
                    },
                ]
            };
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
            }
        }
    }
</script>

<style>
</style>