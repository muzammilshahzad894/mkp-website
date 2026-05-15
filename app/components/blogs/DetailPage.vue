<template>
    <section class="bg-[#121212] text-neutral-300 pt-[120px] pb-16">
      <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">
  
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
  
          <!-- LEFT: IMAGE -->
          <div class="w-full lg:w-[55%] sm:mt-20">
            <div class="overflow-hidden">
              <NuxtImg
                :src="post.image"
                :alt="post.title"
                class="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
  
          <!-- RIGHT: CONTENT -->
          <div class="w-full lg:w-[45%] flex flex-col sm:mt-[75px]">
  
            <!-- META -->
            <p class="font-poppins text-[11px] tracking-[0.18em] text-neutral-500 mb-4">
              {{ post.date }} &nbsp;–&nbsp; {{ post.category }}
            </p>
  
            <!-- TITLE -->
            <h1 class="font-abaya text-[clamp(1.8rem,3vw,2.4rem)] uppercase leading-[1.2] text-white mb-6">
              {{ post.title }}
            </h1>
  
            <!-- INTRO -->
            <p class="font-poppins text-neutral-400 leading-[1.8] mb-6">
              Securing planning permission in Croydon can feel complex, especially if you are unfamiliar with local policies and approval processes. This guide breaks down the essential steps, helping you move forward with clarity and confidence.
            </p>
  
            <!-- SECTION 1 -->
            <div class="mb-6">
              <h2 class="font-abaya text-lg uppercase text-[#c9b8a0] mb-3">
                Understanding Planning Permission
              </h2>
              <p class="font-poppins text-neutral-400 leading-[1.75]">
                Planning permission is required for most structural changes, extensions, and new builds. It ensures that developments align with local policies, neighborhood character, and environmental considerations.
              </p>
            </div>
  
            <!-- SECTION 2 -->
            <div class="mb-6">
              <h2 class="font-abaya text-lg uppercase text-[#c9b8a0] mb-3">
                Key Steps in the Process
              </h2>
              <ul class="font-poppins text-neutral-400 leading-[1.75] space-y-2">
                <li>• Initial consultation and feasibility assessment</li>
                <li>• Preparation of architectural drawings</li>
                <li>• Submission to the local council</li>
                <li>• Review and decision (typically 8 weeks)</li>
              </ul>
            </div>
  
            <!-- SECTION 3 -->
            <div class="mb-6">
              <h2 class="font-abaya text-lg uppercase text-[#c9b8a0] mb-3">
                Common Challenges
              </h2>
              <p class="font-poppins text-neutral-400 leading-[1.75]">
                Delays often occur due to incomplete drawings, overlooking local regulations, or failing to address neighboring properties. A well-prepared application significantly increases approval chances.
              </p>
            </div>
  
            <!-- SECTION 4 -->
            <div class="mb-6">
              <h2 class="font-abaya text-lg uppercase text-[#c9b8a0] mb-3">
                How We Help
              </h2>
              <p class="font-poppins text-neutral-400 leading-[1.75]">
                We guide you through the entire process — from initial concept to final approval. Our approach ensures that your design is not only visually strong but also compliant with planning policies.
              </p>
            </div>
  
          </div>
        </div>
      </div >
    </section >
  </template>
  
  <script setup>
  const post = {
    title: 'How to Get Planning Permission in Croydon',
    date: 'May 13, 2025',
    category: 'Planning Permission',
    image: '/images/blogs/blog-1.png',
  }
  </script>