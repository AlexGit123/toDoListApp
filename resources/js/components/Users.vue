//Drop down showing all usernames to assign a user to a task
<template>
    <div v-for="(users, index) in users" :key="index">
        <!-- should return only user-name -->
        <input type="checkbox" />
        <a>{{ users.name }}</a>
    </div>
</template>

<script>
console.log("Users");

export default {
    name: "Users",
    props: ['users'],
    methods: {}
}
</script>

<style scoped>
a {
    padding-left: 10px;
}
</style>