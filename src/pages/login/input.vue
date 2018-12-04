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
        console.log(getToken)
        getToken(
            {
                client_id: 'foryouclub_BenefitCard_FYCbecard',
                client_secret: 'ecard180-5869-42f4-984b-282062bf464d'
            },
            {
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                }
            }
        ).then(res => {
            console.log(res)
        })
    }
}
</script>
<style>
</style>
