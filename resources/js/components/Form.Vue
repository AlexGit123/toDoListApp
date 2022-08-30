//Add todo
<template>
    <div class="item">
        <input type="text" v-model="task.description" />
        <button class="button" role="button" @click="addTask()">Add</button>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    data: () => {
        return {
            task: {
                description: ""
            }
        }
    },
    methods: {
        addTask() {

            let task = this.task;

            console.log("clicked add button");

            if (task.description == '') {
                return;
            }

            axios.post('api/task/store', {
                task: this.task
            })

                .then(response => {
                    if (response.status == 201) {
                        this.task.description = "";
                        // this.$emit('reloadtask');
                    }
                }).catch(error => {
                    console.log(error);
                })
        }
    }
}

</script>

<style scoped>
input {
    padding: 10px;
    margin-right: 25px;
}

.button {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
}

@media (min-width: 768px) {
    .button {
        padding: 0.25em 0.75em;
    }
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
}
</style>