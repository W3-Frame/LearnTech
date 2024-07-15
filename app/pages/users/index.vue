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
            <button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
              aria-label="Close"
            >
              <span
                class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5"
                aria-hidden="true"
              ></span
              ><!----><!---->
            </button>
          </div>
          <div class="px-4 py-4 sm:px-6">
            <UsersForm @close="isNewUserModalOpen = false" />
          </div>
          <Placeholder class="h-48" />
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
