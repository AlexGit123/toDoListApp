//header component
<template>
    <div class="header">
        <p class="text">To Do List ()</p>    
    </div>
</template>

<script>

    export default {
        name: "Header",
    }
    
    console.log("testing header element");
</script>
<style scoped>

.header { 
    width: 1000px;
    height: 50px;
    margin:auto; 
    background-color: rgb(208, 170, 170);
    text-align: center;
    
}
.text { 
    font-size: 2em;
    color: rgb(0, 0, 0);
}
</style>