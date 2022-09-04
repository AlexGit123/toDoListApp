//Drop down showing all usernames to assign a user to a task
<template>
    <!-- should return only user-name -->
    <a>{{ users }}</a>
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