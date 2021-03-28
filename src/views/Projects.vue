<template>
    <div class="project">
        <router-link tag="a" to="/" class="close">
            <img src="@/assets/images/close.svg" alt="" />
        </router-link>
        <div class="heading">
            <h2 class="section-subtitle">Projects I have worked on.</h2>
            <h1 class="font-black section-title">My Projects</h1>
            <div class="line"></div>
        </div>
        <div class="mt-24">
            <p class="text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>
            <div class="grid grid-cols-1 gap-4 mt-24 text-left lg:grid-cols-2 xl:grid-cols-3">
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
                <div class="project--item">
                    <h6 class="mb-4 text-md">JUNE 2012 - 2016</h6>
                    <h4 class="text-3xl font-extrabold">Lorem Epsum epoke</h4>
                    <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque labore est impedit mollitia amet quidem. Sint facilis, nisi beatae ipsam labore dolor saepe in unde, et porro temporibus tempora!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project'
}
</script>

<style lang="scss" scoped>
    .project {
        padding: 6em 8em;
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
        &--item {
            padding: 2em;
            height: 300px;
            background-color: #161616;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            &:hover {
                border-color: $color-1;
            }
            p {
                color: #9f9f9f;
            }
        }
        @media (max-width: 767px), (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
            padding: 4em 2em;
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
    }
</style>