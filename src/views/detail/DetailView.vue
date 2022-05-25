<template>
    <el-card class="box-card contact-card">
        <div class="header-card">
            <el-button @click="$router.go(-1)" type="text" icon="el-icon-arrow-left">BACK</el-button>
        </div>
        <div class="body-card" style="margin-top: 20px" v-if="contactDetail != null">
            <div class="box-avatar">
                <img class="avatar-img" src="@/assets/item.jpg"/>
            </div>
            <div class="text-detail">
                <div class="text-item">
                    <small>First Name</small>
                    <p>{{contactDetail.firstName}}</p>
                </div>
                <div class="text-item">
                    <small>Last Name</small>
                    <p>{{contactDetail.lastName}}</p>
                </div>
                <div class="text-item">
                    <small>Phone number</small>
                    <p>{{contactDetail.phoneNumber}}</p>
                </div>
                <div class="text-item">
                    <small>Email address</small>
                    <p>{{contactDetail.emailAddress}}</p>
                </div>
            </div>
        </div>
        <div class="footer-card">
            <el-button class="footer-btn" @click="handleClickEdit" type="primary" icon="el-icon-edit" circle></el-button>
            <el-popconfirm confirm-button-text='OK'
                cancel-button-text='No, Thanks'
                icon="el-icon-info"
                icon-color="red"
                @confirm="handleClickDelete()"
                title="Are you sure to delete this?">
                <el-button class="footer-btn" slot="reference" type="danger" icon="el-icon-delete" circle></el-button>
            </el-popconfirm>
        </div>
    </el-card>
</template>

<script lang="ts" src="./index.ts">
</script>
<style scoped src="./styles.css">
</style>