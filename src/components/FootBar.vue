<script setup lang="ts">
const years = new Date().getFullYear()
</script>

<template>
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
            <p>Copyright ©{{ years }} - All right reserved by <b>NS Digital</b>.</p>
        </aside>
    </footer>
</template>