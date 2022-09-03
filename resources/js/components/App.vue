<template>
    <p id="ID"></p>

    <div class="list-container">
        <header-comp></header-comp>
        <form-comp></form-comp>

        <table-comp :tasks="tasks" :users="users"></table-comp>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import FormComponent from './Form.vue'
import TableComponent from './Table.vue'
import { provide } from 'vue';
import store from '../store/index.js'
import axios from 'axios';

export default {
    name: "App",
    setup() {
        provide('store', store)
    },
    components: {
        HeaderComp: HeaderComponent,
        FormComp: FormComponent,
        TableComp: TableComponent
    },
    data: () => {
        return {
            tasks: [],
            users: [],
        }
    },
    methods: {
        getTask() {
            axios.get('api/tasks')
                .then(response => {
                    this.tasks = response.data;

                    let count = document.getElementById('ID')
                    count.append(response.data.length)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getUsers() {
            axios.get('api/users').then(response => {
                this.users = response.data

            }).catch(error => {
                console.log(error)
            })
        },
    },
    created() {
        this.getTask();
        this.getUsers();
    }
};
</script>

<style>
body {
    background-color: rgb(151, 158, 165);
}

.list-container {
    background-color: rgb(222, 132, 222);
    width: 1000px;
    height: 700px;
    margin: auto
}
</style> 
