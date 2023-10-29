<script setup lang="ts">
    const publicUrl = '/';
</script>
<template>
    <div>
        <nav>
        <ul>
            <li>
            <a href="https://sitecore.com">
                <img :src="`${publicUrl}sc_logo.svg`" alt="Sitecore" />
            </a>
            </li>
            <li>
            <a href="https://jss.sitecore.com">JSS Documentation</a>
            </li>
            <li>
            <a href="https://github.com/Sitecore/jss">JSS Repository</a>
            </li>
        </ul>
        </nav>
    </div>
</template>