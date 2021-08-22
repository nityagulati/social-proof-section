<template>
    <div class="site-footer">
        <p class="attribution">Challenge by
            <a :href='frontendUrl' target="_blank">Frontend Mentor</a>. 
            Coded by <a :href='myWebsite'>{{ myName }}</a>.
        </p>
    </div>
</template>

<script>
export default {
    name: 'site-footer',
    data() {
        return {
            frontendUrl: 'https://www.frontendmentor.io?ref=challenge',
            myWebsite: 'https://www.nityagulati.com',
            myName: 'Nitya Gulati',
        }
    },
}
</script>