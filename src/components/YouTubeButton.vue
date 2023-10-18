<template>
    <a :href="href" target="_blank"
        class="text-decoration-none border px-2 py-2 rounded text-bg-danger ">
       
        <slot></slot>
    </a>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    href: String
});
console.log(props);

</script>