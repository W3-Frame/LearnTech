<template>
    <div>

    </div>
</template>

<script lang="ts">
import { useFirestore } from '@vueuse/firebase';
import { collection } from 'firebase/firestore';

definePageMeta({
  layout: "dashboard",
});
useSeoMeta({
  title: "Lessons Page",
});

const { db } = useFirebase();
const Course = useFirestore(collection(db, "Course"));

</script>

<style scoped>

</style>