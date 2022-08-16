<template>

    <div class="list-container">
        <header-comp></header-comp>
        <form-comp></form-comp>

        <table-comp :tasks="tasks"></table-comp>
    </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import FormComponent from './Form.vue'
import TableComponent from './Table.vue'
import axios from 'axios';

export default {
    name: "App",
    components: {
        HeaderComp: HeaderComponent,
        FormComp: FormComponent,
        TableComp: TableComponent
    },
    data: () => {
        return {
            tasks: []
        }
    },
    methods: {
        getTask() {
            axios.get('api/tasks')
                .then(response => {
                    this.tasks = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getTask();
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
    height: 650px;
    margin: auto
}
</style> 
