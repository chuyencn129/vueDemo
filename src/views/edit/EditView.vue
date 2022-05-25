<template>
    <el-card class="box-card contact-card" v-if="contactDetail">
        <div class="header-card">
            <el-button @click="$router.go(-1)" type="text" icon="el-icon-arrow-left">BACK</el-button>
        </div>
        <div class="body-card" style="margin-top: 20px">
            <div class="box-avatar">
                <img class="avatar-img" src="@/assets/item.jpg"/>
            </div>
            <div class="text-detail">
                <contact-form :contact="contactDetail" @change-info="handleChangeInfo" />
            </div>
        </div>
        <div class="footer-card">
            <el-button class="footer-btn" @click="handleSave" type="primary" icon="el-icon-check" circle></el-button>
        </div>
    </el-card>
</template>

<script lang="ts" src="./index.ts">
</script>
<style scoped src="./styles.css">
</style>