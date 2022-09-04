//Drop down showing all usernames to assign a user to a task
<template>
    <div v-for="(users, index) in users" :key="index">
        <!-- should return only user-name -->
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
    
</style>