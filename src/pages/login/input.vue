<template>
  <div>
    <h1>sfjshdfkhs</h1>
  </div>
</template>
<script>
import { getToken } from '@/api/permission'

export default {
    data() {
        return {}
    },
    created() {
        getToken(
            {
                'client_id': '111',
                'client_secret': '222'
            }
        ).then(res => {
        })
    }
}
</script>
<style>
</style>
