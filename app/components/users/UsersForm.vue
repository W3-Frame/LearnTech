<script setup lang="ts">
import type { FormError } from "#ui/types";
import { ref } from "vue";
import { doc, setDoc } from "firebase/firestore";
import type { User } from "~/type/model";
import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
} from "firebase/auth";

const { db, auth } = useFirebase();

const emit = defineEmits(["close"]);

const state: Partial<User> = reactive({});

// https://ui.nuxt.com/components/form

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.firstName)
    errors.push({ path: "firstName", message: "Please enter a firstName." });
  if (!state.lastName)
    errors.push({ path: "lastName", message: "Please enter a lastName." });
  if (!state.email)
    errors.push({ path: "email", message: "Please enter an email." });
  if (!state.birthDate)
    errors.push({ path: "birthDate", message: "Please enter the Birth Date." });
  if (!state.role)
    errors.push({ path: "role", message: "Please enter the Role." });
  if (!state.phoneNumber)
    errors.push({
      path: "phoneNumber",
      message: "Please enter the PhoneNumber.",
    });
  return errors;
};

async function onSubmit() {
  // Create the user in the db and add the user into user collection

  if (state.email)
    createUserWithEmailAndPassword(auth, state.email, "Admin123").then(
      async (result) => {
        // Signed up
        const isNewUser = getAdditionalUserInfo(result)?.isNewUser;

        if (isNewUser) {
          const { uid } = result.user;
          await setDoc(doc(db, "users", uid), {
            ...state,
            displayName: `${state.firstName} ${state.lastName}`,
            updatedAt: new Date().toDateString(),
            createddAt: new Date().toDateString(),
            birthDate:'${state.birthDate}',
            role:'${state.role}',
            phoneNumber:'${state.phoneNumber}',
          });
        }
      }
    );

  emit("close");
}
</script>

<template>
  <UForm
    :validate="validate"
    :validate-on="['submit']"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="Last Name" name="lastName">
      <UInput v-model="state.lastName" placeholder="Doe" autofocus />
    </UFormGroup>
    <UFormGroup label="First Name" name="firstName">
      <UInput v-model="state.firstName" placeholder="John" autofocus />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput
        v-model="state.email"
        type="email"
        placeholder="john.doe@example.com"
      />
    </UFormGroup>

    <UFormGroup label="BirthDate" name="birthDate">
      <UInput v-model="state.birthDate" placeholder="30 May 1990" autofocus />
    </UFormGroup>

    <UFormGroup label="Role" name="role">
      <UInput v-model="state.role" placeholder="¨Professor¨" autofocus />
    </UFormGroup>
    <UFormGroup label="PhoneNumber" name="phoneNumber">
      <UInput v-model="state.phoneNumber" placeholder="97564534" autofocus />
    </UFormGroup>
    <UFormGroup label="Photo" name="photoURL">
      <UInput v-model="state.photoURL" placeholder="97564534" autofocus />
    </UFormGroup>

    <div class="flex justify-end gap-3">
      <UButton
        label="Cancel"
        color="gray"
        variant="ghost"
        @click="emit('close')"
      />
      <UButton type="submit" label="Save" color="black" />
    </div>
  </UForm>
</template>
