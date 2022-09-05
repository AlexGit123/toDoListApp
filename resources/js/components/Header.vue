//header component
<template>
    <div class="header">
        <p class="text">To Do List - Total ({{ store.state.counter }})</p>
    </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
    name: "Header",
    setup() {
        const store = inject('store');

        store.methods.getTask();

        return {
            store
        }
    }
}
console.log("testing header element");
</script>

<style scoped>
.header {
    width: 1000px;
    height: 40px;
    margin: auto;
    background-color: rgb(208, 170, 170);
    text-align: center;

}

.text {
    font-size: 2em;
    color: rgb(0, 0, 0);
}
</style>