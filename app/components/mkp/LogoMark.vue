<template>
  <svg
    :class="sizeClass"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="5"
      y="5"
      width="16"
      height="16"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <rect
      x="11"
      y="11"
      width="16"
      height="16"
      stroke="currentColor"
      stroke-width="1.5"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-6 w-6'
    case 'lg':
      return 'h-10 w-10'
    default:
      return 'h-8 w-8'
  }
})
</script>
