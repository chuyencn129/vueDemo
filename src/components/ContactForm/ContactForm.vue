<template>
    <div class="form">
        <div class="form-item">
            <span>First Name</span>
            <input placeholder="First Name" @change="handleChanContact" v-model="contact.firstName">
        </div>
        <div class="form-item">
            <span>Last Name</span>
            <input placeholder="Last Name" @change="handleChanContact" v-model="contact.lastName">
        </div>
        <div class="form-item">
            <span>Phone number</span>
            <input placeholder="Phone number" @change="handleChanContact" v-model="contact.phoneNumber">
        </div>
        <div class="form-item">
            <span>Email address</span>
            <input placeholder="Email address" @change="handleChanContact" v-model="contact.emailAddress">
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts">
</script>
<style scoped src="./styles.css">
</style>