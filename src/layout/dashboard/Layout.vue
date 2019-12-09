<template>
    <div>
        <sidebar></sidebar>
        <top-navbar></top-navbar>
        <main-content></main-content>
    </div>
</template>

<script>
    import TopNavbar from "./TopNavbar"
    import Sidebar from "./Sidebar"
    import Content from "./Content"

    export default {
        name: 'layout',
        components: {
            'top-navbar': TopNavbar,
            'sidebar': Sidebar,
            'main-content': Content
        }

    }
</script>

<style>

</style>