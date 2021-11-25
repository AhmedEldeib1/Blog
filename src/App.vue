<template>
    <div>
        <v-app>
            <v-card color="grey lighten-4" flat tile>
                <v-toolbar>
                    <v-toolbar-title>Ahmed Eldeib Blog</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <router-link :to="{ name: 'Home' }">Home</router-link>
                    <!-- |
                    <router-link :to="{ name: 'List' }">List</router-link> -->
                </v-toolbar>
            </v-card>
            <v-main>
                <transition name="go" mode="out-in">
                    <router-view />
                </transition>
            </v-main>
        </v-app>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
html {
    scroll-behavior: smooth;
}
a {
    text-decoration: none;
    margin: 2vh;
}
.go-enter,
.go-leave-to {
    opacity: 0;
    transform: translateY(100vh);
}
.go-enter-active,
.go-leave-active {
    transition: all 0.5s ease;
}
/* .theTaks-enter {
    opacity: 0;
    transform: translateY(20px);
}
.theTaks-enter-active {
    transition: all 0.5s ease;
}
.theTaks-move {
    transition: transform 0.2s ease-in;
} */
</style>
