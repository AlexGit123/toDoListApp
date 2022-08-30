//all task rendered here 
<template>

    <div class="all-task">

        <!-- Loop through each task and render them -->
        <div v-for="(task, index) in tasks" :key="index">

            <task :task="task" class="task" v-on:taskchanged="$emit('reloadtask')">
            </task>

        </div>

    </div>

</template>
<script>
import task from "./Task.vue"

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