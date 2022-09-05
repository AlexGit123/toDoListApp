import { reactive } from "vue";
import axios from "axios";

//add task w empty array,
const state = reactive({
    counter: null,
});

const task = reactive({
    tasks: [],
});

const methods = {
    getTask() {
        axios
            .get("api/tasks")
            .then((response) => {
                //consider "storing" this in task.tasks to keep on single state of truth
                this.tasks = response.data;

                state.counter = response.data.length;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default {
    state,
    methods,
};
