<template>
    <el-card class="box-card contact-card">
        <div class="header-card">
            <h3>MY CONTACT</h3>
            <el-input placeholder="Type name or number" v-model="strSearch" class="input-with-select st-shadow">
                <el-button class="btn-search" @click="handleSearch" slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="body-card">
            <el-card class="box-card contact-item" v-for="(item, index) in contacts" :key="index" :body-style="{ padding: '0' }">
                <div style="display: flex;" @click="handleClickItem(item.id)">
                    <img src="@/assets/item.jpg"/>
                    <div class="item-info">
                        <p><b>{{item.firstName}} {{item.lastName}}</b></p>
                        <span>{{item.phoneNumber}}</span>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="footer-card">
            <el-button class="footer-btn" @click="handleClickAdd" type="primary" icon="el-icon-plus" circle></el-button>
        </div>
    </el-card>
</template>

<script lang="ts" src="./index.ts">
</script>
<style scoped src="./styles.css">
</style>