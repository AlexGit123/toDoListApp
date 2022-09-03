//header component
<template>
    <div class="header">
        <p class="text">To Do List: Total ({{ store.state.counter }})</p>
    </div>

    <div class="test">
        <button class="button" @click="store.methods.getTask">Get total</button>
    </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
    name: "Header",
    setup() {
        const store = inject('store');

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

.test {
    width: 1000px;
    height: 50px;
    margin: auto;
    text-align: center;
    padding-top: 5px;
}

/* CSS */
.button {
    background-color: #EA4C89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button:hover,
.button:focus {
    background-color: #F082AC;
}
</style>