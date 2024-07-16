<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const emit = defineEmits(['close'])

const state = reactive({
  name: undefined,
  email: undefined,
  BirthDate: undefined,
  Role: undefined,
  PhoneNumber: undefined,
  Photo: undefined
})

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
      name="Birth Date"
    >
      <UInput
        v-model="state.BirthDate"
        placeholder="30 May 1990"
        autofocus
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