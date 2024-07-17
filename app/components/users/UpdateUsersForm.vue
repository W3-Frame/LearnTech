<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { ref } from "vue";
import { doc, setDoc } from "firebase/firestore";
import type { User } from "~/type/model";

const { db } = useFirebase();

interface Props {
  row: User;
}
const props = defineProps<Props>();

const state: Ref<Partial<User>> = ref({
  firstName: props.row.firstName,
  lastName: props.row.lastName,
  email: props.row.email,
  birthDate: props.row.birthDate,
  role: props.row.role,
  phoneNumber: props.row.phoneNumber,
  photoURL: props.row.photoURL,
});

const emit = defineEmits(["close"]);

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
  await setDoc(doc(db, "users", props.row.id), { ...state.value, displayName: `${state.value.firstName} ${state.value.lastName}` });
  emit("close");
}
</script>

<template>
  <UForm
    :validate="validate"
    :validate-on="['submit']"
    :state="state"
    class="space-y-4"
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
      <UInput
        v-model="state.birthDate"
        type="date"
        placeholder="30 May 1990"
        autofocus
      />
    </UFormGroup>

    <UFormGroup label="Role" name="role">
      <UInput v-model="state.role" placeholder="¨Professor¨" autofocus />
    </UFormGroup>
    <UFormGroup label="Phone Number" name="phoneNumber">
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
      <UButton type="submit" label="Save" color="black" @click="onSubmit()" />
    </div>
  </UForm>
</template>
