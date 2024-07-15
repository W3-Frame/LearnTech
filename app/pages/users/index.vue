<template>
  <div>
    <div>
      <h1>Users</h1>
      <UTable :loading="!users" :columns="columns" :rows="users">
        <template #id-data="{ row, index }">
          <pre>{{ index }}</pre>
        </template>
        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
      </UTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFirestore } from "@vueuse/firebase/useFirestore";
import { collection } from "firebase/firestore";

definePageMeta({
  layout: "dashboard",
});
useSeoMeta({
  title: "User Page",
});

const { db } = useFirebase();
const users = useFirestore(collection(db, "users"));
const columns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "email",
    label: "User Email",
  },
  {
    key: "displayName",
    label: "Name",
  },

  {
    key: "BirthDate",
    label: "Birth Date",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },
  {
    key: "photoURL",
    label: "Photo",
  },
  {
    key: "createdAt",
    label: "Created At",
  },
  {
    key: "updatedAt",
    label: "Updated At",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
</script>

<style scoped></style>
