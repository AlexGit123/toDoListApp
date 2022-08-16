//Drop down to assign users to a task
<template>
    <div class="users">

        <input type="checkbox" />

        <span class="">
            <p>{{ user.name }}</p>
        </span>

        <button class="trash">Users</button>
    </div>

</template>
<script>
import axios from 'axios';

console.log("testing singular task");

export default {
    props: ['users'],
    methods: {
        getUsers() {

        }
    }
}
</script>
<style scoped>
</style>