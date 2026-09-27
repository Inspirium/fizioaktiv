<template>
  <div class="text-center font-barlow">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>
</template>
