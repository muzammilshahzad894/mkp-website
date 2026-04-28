<template>
  <main>
    <ContactHero />
    <ContactGetInTouchSection />
    <ContactMapSection />
  </main>
</template>

<script setup>
import ContactHero from '~/components/contact/ContactHero.vue'
import ContactGetInTouchSection from '~/components/contact/ContactGetInTouchSection.vue'
import ContactMapSection from '~/components/contact/ContactMapSection.vue'

useHead({
  title: 'MKP Design — Contact'
})
</script>
