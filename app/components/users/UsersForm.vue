<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const emit = defineEmits(['close'])

const state = reactive({
  name: undefined,
  email: undefined,
  birthDate: undefined,
  role: undefined,
  phoneNumber: undefined,
  photoURL: undefined
})

// https://ui.nuxt.com/components/form
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Please enter a name.' })
  if (!state.email) errors.push({ path: 'email', message: 'Please enter an email.' })
  if (!state.birthDate) errors.push({ path: 'birthDate', message: 'Please enter the Birth Date.' })
  if (!state.role) errors.push({ path: 'role', message: 'Please enter the Role.' })
  if (!state.phoneNumber) errors.push({ path: 'phoneNumber', message: 'Please enter the PhoneNumber.' })
  return errors
}

async function onSubmit() {
  // Do something with data
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
      />
    </UFormGroup>

    <UFormGroup
      label="BirthDate"
      name="birthDate"
    >
      <UInput
        v-model="state.birthDate"
        placeholder="30 May 1990"
        autofocus
      />
      
    </UFormGroup>

    <UFormGroup
      label="Role"
      name="role"
    >
      <UInput
        v-model="state.role"
        placeholder=¨Professor¨
        autofocus
      />
      
    </UFormGroup>
    <UFormGroup
      label="PhoneNumber"
      name="phoneNumber"
    >
      <UInput
        v-model="state.phoneNumber"
        placeholder=97564534
        autofocus
      />
      
    </UFormGroup>
    <UFormGroup
      label="Photo"
      name="Photo"
    >
      <UInput
        v-model="state.photoURL"
        placeholder=97564534
        autofocus
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