//all task rendered here 
<template>

    <div class="all-task">
        <!-- Loop through each task and render them -->
        <div v-for="(task, index) in tasks" :key="index">
            <!-- task child component  -->
            <task :task="task" :users="users" class="task" v-on:taskchanged="$emit('reloadtask')"></task>
        </div>
    </div>

</template>
<script>
import task from "./Task.vue"
import users from "./Users.vue";

export default {
    name: "Table",
    props: ['tasks', 'users'],
    components: {
        task,
        users
    }
}
</script>
<style>
.all-task {
    text-align: center;
    padding: 10px;
    margin-top: 5px;
}

.task {
    text-decoration: none;
}
</style>