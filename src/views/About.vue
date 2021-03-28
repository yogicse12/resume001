<template>
    <div class="about">
        <router-link tag="a" to="/" class="close">
            <img src="@/assets/images/close.svg" alt="" />
        </router-link>
        <div class="heading">
            <h2 class="section-subtitle">Get to know me</h2>
            <h1 class="font-black section-title">About Me</h1>
            <div class="line"></div>
        </div>
        <div class="px-0 mt-16 md:mt-32 md:container lg:px-8 md:mx-auto">
            <div class="grid grid-cols-1 gap-0 text-left lg:gap-16 lg:grid-cols-3">
                <div class="col-span-1">
                    <div class="cover-photo">
                        <div class="background-image-holder" :style="{'background-image': 'url(' + require('@/assets/images/cover-photo.jpg') +')'}"></div>
                    </div>
                </div>
                <div class="col-span-2">
                    <h5 class="text-2xl font-bold text-primary">Who am i?</h5>
                    <h4 class="mt-4 text-3xl font-black leading-10">
                        I'm Arnab Sarkar, a visual UX/UI Designer and Web
                        Developer
                    </h4>
                    <p class="mt-4 text-lg">
                        I am a freelancer based in the United Kingdom and i have
                        been building noteworthy UX/UI designs and websites for
                        years, which comply with the latest design trends. I
                        help convert a vision and an idea into meaningful and
                        useful products. Having a sharp eye for product
                        evolution helps me prioritize tasks, iterate fast and
                        deliver faster.
                    </p>
                    <div class="divider"></div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <div class="text-xl leading-10">
                                <span class="font-bold">Name: </span>Arnab
                                Sarkar
                            </div>
                            <div class="text-xl leading-10">
                                <span class="font-bold">Age: </span>21
                            </div>
                        </div>
                        <div>
                            <div class="text-xl leading-10">
                                <span class="font-bold">Email: </span>
                                <a
                                    href="mailto:arnabsarkar@gmail.com"
                                    class="link"
                                    >arnabsarkar@gmail.com</a
                                >
                            </div>
                            <div class="text-xl leading-10">
                                <span class="font-bold">From: </span>Haridwar,
                                Uttarakhand
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <a class="btn btn-primary">Download CV</a>
                    </div>
                </div>
            </div>
            <div class="mt-32 text-left">
                <div class="section-heading">
                    <h2 class="section-subtitle">Services I can offer</h2>
                    <h1 class="font-black section-title">My Services</h1>
                </div>
                <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/webdesign.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">Web Designing</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/grid.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">UI/UX Design</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/code.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">Website Development</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/seo.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">SEO Optimization</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/branding.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">Branding</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="service">
                        <div class="mb-4"><img src="@/assets/images/instagram.svg" alt="" /></div>
                        <h4 class="text-xl font-extrabold">Social Media</h4>
                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            key: "value",
        };
    },
};
</script>

<style lang="scss" scoped>
.about {
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
            width: 100%;
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
    .cover-photo {
        position: relative;
        height: 470px;
        border-radius: 10px;
    }
    .service {
        padding: 32px;
        background-color: #161616;
        height: 220px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:hover {
            border-color: $color-1;
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
        .cover-photo {
            height: 250px;
            width: 250px;
            margin-bottom: 32px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait) {
        padding: 4em 2em;
        .cover-photo {
            height: 250px;
            width: 250px;
            margin-bottom: 32px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 50%;
            overflow: hidden;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape) {
        padding: 4em 2em;
    }
}
</style>