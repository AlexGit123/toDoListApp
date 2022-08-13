

<template>
    
<div class="list-container">
    <header-comp></header-comp>
    <form-comp></form-comp>
    <table-comp></table-comp>
</div>

</template>

<script>    
import HeaderComponent from './Header.vue';
import FormComponent from './Form.vue'
import TableComponent from './Table.vue'

export default {
    name: "App",
    components: { 
        HeaderComp: HeaderComponent,
        FormComp: FormComponent,
        TableComp: TableComponent
    },
};

</script>

<style>
body { 
    background-color: rgb(151, 158, 165);
}

.list-container{ 
    background-color: rgb(222, 132, 222);
    width: 1000px;
    height: 500px;
    margin:auto
}
</style> 
