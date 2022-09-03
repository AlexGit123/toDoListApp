import { reactive } from "vue";
import axios from "axios";

//add task w empty array,
const state = reactive({
    counter: null,
});

const methods = {
    getTask() {
        axios
            .get("api/tasks")
            .then((response) => {
                this.tasks = response.data;

                state.counter = response.data.length;

                //call mutation and store task array built from api and store in array, second store for users
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
