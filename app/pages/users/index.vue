<template>
  <div>
    <div>
      <h1>Users</h1>
      <UButton
        label="New user"
        trailing-icon="i-heroicons-plus"
        color="gray"
        @click="isNewUserModalOpen = true"
      />

      <UModal v-model="isNewUserModalOpen">
        <div class="">
          <div
            class="flex items-start justify-between gap-x-1.5 flex-shrink-0 min-h-[--header-height] px-4 py-4 sm:px-6 pb-0"
          >
            <div class="flex items-start gap-4">
              <!---->
              <div>
                <p class="text-gray-900 dark:text-white font-semibold">
                  New user
                </p>
                <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                  Add a new user to your database
                </p>
              </div>
            </div>
            <UButton
              icon="i-heroicons-x-mark"
              color="gray"
              variant="ghost"
              @click="
                () => {
                  isNewUserModalOpen = false;
                }
              "
            >
            </UButton>
          </div>
          <div class="px-4 py-4 sm:px-6">
            <UsersForm @close="isNewUserModalOpen = false" />
          </div>
        </div>
      </UModal>
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

const isNewUserModalOpen = ref(false);
const columns = [
  
  {
    key: "actions",
    label: "Actions",
  },
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
    key: "role",
    label: "Role",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },

  {
    key: "BirthDate",
    label: "Birth Date",
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
    key: "photoURL",
    label: "Photo",
  },
  
];
const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: async () => await navigateTo("/users/" + row.id),
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
