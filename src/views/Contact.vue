<template>
    <div class="contact">
        <router-link tag="a" to="/" class="close">
            <img src="@/assets/images/close.svg" alt="" />
        </router-link>
        <div class="heading">
            <h2 class="section-subtitle">Feel free to contact me anytimes</h2>
            <h1 class="font-black section-title">Get in Touch</h1>
            <div class="line"></div>
        </div>
        <div class="px-4 pt-16 md:pt-32 md:container xl:px-16 md:mx-auto">
            <div class="grid grid-cols-1 gap-12 text-left xl:gap-24 md:grid-cols-4">
                <div class="md:col-span-2 xl:col-span-1">
                    <div class="mb-5">
                        <h6 class="text-xl font-extrabold">Phone</h6>
                        <p class="mt-2">
                            +91 99080 65067
                        </p>
                    </div>
                    <div class="mb-5">
                        <h6 class="text-xl font-extrabold">Email</h6>
                        <p class="mt-2">
                            arnabsarkar@gmail.com
                        </p>
                    </div>
                    <div class="mb-5">
                        <h6 class="text-xl font-extrabold">Address</h6>
                        <p class="mt-2">
                            15 C Cross, Mathikere, Bangalore, Karnataka
                        </p>
                    </div>
                    <div>
                        <h6 class="text-xl font-extrabold">Social Links</h6>
                        <div class="grid grid-cols-4 gap-4 mt-4">
                            <div class="social-icons">
                                <img src="@/assets/images/facebook.svg" alt="">
                            </div>
                            <div class="social-icons">
                                <img src="@/assets/images/twitter.svg" alt="">
                            </div>
                            <div class="social-icons">
                                <img src="@/assets/images/instagram1.svg" alt="">
                            </div>
                            <div class="social-icons">
                                <img src="@/assets/images/linkedin.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-2 xl:col-span-3">
                    <div class="grid grid-cols-2 gap-8">
                        <div class="col-span-2 form-item md:col-span-1"><input type="text" placeholder="YOUR NAME"></div>
                        <div class="col-span-2 form-item md:col-span-1"><input type="text" placeholder="YOUR EMAIL"></div>
                        <div class="col-span-2 form-item">
                            <textarea placeholder="YOUR MESSAGE"></textarea>
                        </div>
                    </div>
                    <button class="mt-6 btn btn-primary">Send Message</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
    .contact {
        padding: 6em 8em;
        height: 100vh;
        .close {
            position: fixed;
            right: 32px;
            top: 24px;
        }
        .heading {
            .line {
                position: relative;
                margin-top: 24px;
                &:before {
                    content: "";
                    position: absolute;
                    background-color: $color-1;
                    height: 4px;
                    width: 64px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
        .social-icons {
            img {
                width: 24px;
            }
        }
        @media (max-width: 767px), (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
            padding: 4em 1em;
            height: auto;
            .close {
                position: fixed;
                right: 12px;
                top: 12px;
                width: 32px;
            }
        }
        @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait) {
            padding: 4em 2em;
        }
        @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape) {
            padding: 4em 2em;
        }
    }
</style>