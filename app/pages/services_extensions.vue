<template>
  <main class="bg-white text-neutral-900">
    <HeroSection />
    <RecentExtensionsSection />
    <TransformSection />
    <WhyChooseSection />
  </main>
</template>

<script setup>
import HeroSection from '@/components/services_extensions/HeroSection.vue'
import RecentExtensionsSection from '@/components/services_extensions/RecentExtensionsSection.vue'
import TransformSection from '@/components/services_extensions/TransformSection.vue'
import WhyChooseSection from '@/components/services_extensions/WhyChooseSection.vue'

useHead({
  title: 'MKP Design — Services'
})
</script>
