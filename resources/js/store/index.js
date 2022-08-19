import { reactive } from "vue";
import axios from "axios";

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
