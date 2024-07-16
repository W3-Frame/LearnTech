<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ref } from "vue";

const props = defineProps({
  row: {
    type: Object,
    required: true,
  },
});

const state = ref({
  name: props.row.displayName,
  email: props.row.email,
  BirthDate: props.row.BirthDate,
  Role: props.row.Role,
  PhoneNumber: props.row.PhoneNumber,
  Photo: props.row.Photo,
});
const emit = defineEmits(['close'])



// https://ui.nuxt.com/components/form
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Please enter a name.' })
  if (!state.email) errors.push({ path: 'email', message: 'Please enter an email.' })
  if (!state.BirthDate) errors.push({ path: 'BirthDate', message: 'Please enter the Birth Date.' })
  if (!state.Role) errors.push({ path: 'Role', message: 'Please enter the Role.' })
  if (!state.PhoneNumber) errors.push({ path: 'PhoneNumber', message: 'Please enter the PhoneNumber.' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)

  emit('close')
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
    <UFormGroup
      label="Name"
      name="name"
    >
      <UInput
        v-model="state.name"
        placeholder="John Doe"
        autofocus
        :value="row.displayName"
      />
      
    </UFormGroup>

    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        type="email"
        placeholder="john.doe@example.com"
        :value="row.email"
      />
    </UFormGroup>

    <UFormGroup
      label="BirthDate"
      name="Birth Date"
    >
      <UInput
        v-model="state.BirthDate"
        type="date"
        placeholder="30 May 1990"
        autofocus
        :value="row.BirthDate"
      />
      
    </UFormGroup>

    <UFormGroup
      label="Role"
      name="Role"
    >
      <UInput
        v-model="state.Role"
        placeholder=¨Professor¨
        autofocus
        :value="row.Role"
      />
      
    </UFormGroup>
    <UFormGroup
      label="PhoneNumber"
      name="Phone Number"
    >
      <UInput
        v-model="state.PhoneNumber"
        placeholder=97564534
        autofocus
        :value="row.PhoneNumber"
      />
      
    </UFormGroup>
    <UFormGroup
      label="Photo"
      name="Photo"
    >
      <UInput
        v-model="state.Photo"
        placeholder=97564534
        autofocus
        :value="row.Photo"
      />
      
    </UFormGroup>


    <div class="flex justify-end gap-3">
      <UButton
        label="Cancel"
        color="gray"
        variant="ghost"
        @click="emit('close')"
      />
      <UButton
        type="submit"
        label="Save"
        color="black"
      />
    </div>
  </UForm>
</template>