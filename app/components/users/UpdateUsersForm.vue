<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { ref } from "vue";
import { doc, setDoc } from "firebase/firestore";

const { auth, db } = useFirebase();

const props = defineProps({
  row: {
    type: Object,
    required: true,
  },
});

const state = ref({
  name: props.row.displayName,
  email: props.row.email,
  birthDate: undefined,
  role: props.row.Role,
  phoneNumber: props.row.PhoneNumber,
  photoURL: props.row.Photo,
});

const emit = defineEmits(["close"]);

// https://ui.nuxt.com/components/form
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name)
    errors.push({ path: "name", message: "Please enter a name." });
  if (!state.email)
    errors.push({ path: "email", message: "Please enter an email." });
  if (!state.BirthDate)
    errors.push({ path: "birthDate", message: "Please enter the Birth Date." });
  if (!state.Role)
    errors.push({ path: "role", message: "Please enter the Role." });
  if (!state.PhoneNumber)
    errors.push({
      path: "phoneNumber",
      message: "Please enter the PhoneNumber.",
    });
  return errors;
};

async function onSubmit() {
  // Do something with data
  console.log("value of state",state.value);

  await setDoc(doc(db, "users", props.row.id), { ...state.value });
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
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" placeholder="John Doe" autofocus />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput
        v-model="state.email"
        type="email"
        placeholder="john.doe@example.com"
      />
    </UFormGroup>

    <UFormGroup label="BirthDate" name="Birth Date">
      <UInput
        v-model="state.birthDate"
        type="date"
        placeholder="30 May 1990"
        autofocus
      />
    </UFormGroup>

    <UFormGroup label="Role" name="Role">
      <UInput v-model="state.role" placeholder="¨Professor¨" autofocus />
    </UFormGroup>
    <UFormGroup label="PhoneNumber" name="Phone Number">
      <UInput v-model="state.phoneNumber" placeholder="97564534" autofocus />
    </UFormGroup>
    <UFormGroup label="Photo" name="Photo">
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
