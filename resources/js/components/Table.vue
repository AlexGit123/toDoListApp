//all task rendered here 
<template>
    <div class="all-task">
        <div v-for="(task, index) in tasks" :key="index">
            <task :task="task" class="task" v-on:taskchanged="$emit('reloadtask')">
            </task>
        </div>
    </div>

    <div class="user-dropdown">

    </div>
</template>

<script>
import task from "./task"
import users from "./users"

export default {
    name: "Table",
    props: ['tasks', 'users'],
    components: {
        task
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