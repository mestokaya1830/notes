<template>
  <div class="admin-menu-mobil" @click="closeAdminMenu()">
    <MemberRoleComponent v-if="$store.state.auth.role == 'Member'"/>
    <AdminRoleComponent v-if="$store.state.auth.role == 'Admin'"/>
    <SuperadminRoleComponent v-if="$store.state.auth.role == 'Superadmin'"/>
    <BossRoleComponent v-if="$store.state.auth.role == 'Boss'"/>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  import { useStore } from 'vuex'
  const store = useStore()
  
  const MemberRoleComponent = defineAsyncComponent(() => import("@/components/member-role-component.vue"))
  const AdminRoleComponent = defineAsyncComponent(() => import("@/components/admin-role-component.vue"))
  const SuperadminRoleComponent = defineAsyncComponent(() => import("@/components/superadmin-role-component.vue"))
  const BossRoleComponent = defineAsyncComponent(() => import("@/components/boss-role-component.vue"))

  const closeAdminMenu = () => {
    store.commit("setAdminMenu", false)
  }

</script>
