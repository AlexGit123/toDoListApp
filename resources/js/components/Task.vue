//single task component, should select user &| delete task entirely
<template>
    <div class="task">
        <input type="checkbox" @change="updateCheck()" v-model="task.completed" />

        <span :class="[task.completed ? 'completed' : '', 'taskText']">
            <p>{{ task.description }}</p>
        </span>
       
        <div class="dropdown" @blur="disableDropDown()">
            <button @click="dropDownOpened()" class="dropbtn">Users</button>

            <div id="myDropdown" class="dropdown-content" :class="{ show: dropdownOpened }">
                <users :users="users"></users>
            </div>
        </div>

        <button @click="removeTask()" class="trash">Delete</button>
    </div>
</template>

<script>
import users from "./Users.vue"
import axios from 'axios';

export default {
    data: () => {
        return {
            users: [],
            dropdownOpened: false,
        }
    },
    components: {
        users
    },
    props: ['task', 'users'],
    methods: {
        //Conflict with the text styling when a task is checked off
        // updateCheck() {
        //     axios.put('api/task/' + this.task.id, {
        //         task: this.task
        //     }).then(response => {
        //         if (response.status == 200) {
        //             console.log("updateCheck working");
        //         }
        //     }).catch(error => {
        //         console.log(error);
        //     })
        // },
        removeTask() {
            axios.delete('api/task/' + this.task.id)
                .then(response => {
                    if (response == 200) {
                        console.log("all worked");
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        dropDownOpened() {
            this.dropdownOpened = !this.dropdownOpened;
        },
        disableDropDown() {
            this.dropdownOpened = false;
        },
    },
}
</script>

<style scoped>
.completed {
    text-decoration-line: line-through;
    text-decoration-thickness: 5px;
    color: red;
}

.taskText {
    width: 100%;
}

.task {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}

.trash {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
}

@media (min-width: 768px) {
    .button {
        padding: 0.25em 0.75em;
    }
}

/* adding css for dropdown menu */
.dropbtn {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {
    background-color: #ddd;
}

.show {
    display: block;
}
</style>