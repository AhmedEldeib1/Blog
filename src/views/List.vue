<template>
    <div>
        <h1>Here is the List</h1>
        <input placeholder="enter your task" v-model="word" />
        <br />
        <button @click="addWord">Submit</button> |
        <button @click="sortWord">Sort</button>
        <div>
            <transition-group name="theTaks" tag="ul" appear="">
                <li v-for="task in tasks" :key="task">
                    {{ task }}
                </li>
            </transition-group>
        </div>
        <transition appear="true" @before-enter="beforeEnter" @enter="enter">
            <div class="ggg"></div>
            <div class="ggg"></div>
            <div class="ggg"></div>
            <div class="ggg"></div>
        </transition>
    </div>
</template>

<script>
import gsap from "gsap";
export default {
    data() {
        return {
            word: "",
            tasks: ["eat", "drink", "live"],
        };
    },
    methods: {
        addWord() {
            this.tasks.push(this.word);
            this.word = "";
        },
        sortWord() {
            this.tasks.sort();
        },
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.transform = "scale(0,0)";
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                duration: 1,
                scale: 1,
                ease: "bounce.out",
                onComplete: done,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
input {
    outline-color: red;
}
.ggg {
    width: 100px;
    height: 100px;
    background-color: black;
}
</style>
