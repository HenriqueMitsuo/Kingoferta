<template>
  <div class="home">
    <MessageDialog/>
    <HomeLayout/>
  </div>
</template>

<script>
import HomeLayout from '../components/home/HomeLayout'
import MessageDialog from '../components/home/MessageDialog'
export default {
    components: {
        HomeLayout,
        MessageDialog
    }
}
</script>
