<template>
    <v-container fluid>
        <h1 class="text-center">Posts Page</h1>
        <v-row v-if="page == 1">
            <v-col
                cols="12"
                sm="4"
                v-for="info in theInfos.slice(0, 24)"
                :key="info.id"
            >
                <v-card class="mx-auto theArea" max-width="344" height="300px">
                    <v-card-text>
                        <h1 class="text-h4 text--primary">
                            {{ info.title }}
                        </h1>
                    </v-card-text>
                    <v-card-actions>
                        <router-link
                            :to="{ name: 'Show', params: { id: info.id } }"
                        >
                            <v-btn text color="teal accent-4" class="theBTN">
                                Learn More
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="page == 2">
            <v-col
                cols="12"
                sm="4"
                v-for="info in theInfos.slice(24, 48)"
                :key="info.id"
            >
                <v-card class="mx-auto theArea" max-width="344" height="300px">
                    <v-card-text>
                        <h1 class="text-h4 text--primary">{{ info.title }}</h1>
                    </v-card-text>
                    <v-card-actions>
                        <router-link
                            :to="{ name: 'Show', params: { id: info.id } }"
                        >
                            <v-btn text color="teal accent-4" class="theBTN">
                                Learn More
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="page == 3">
            <v-col
                cols="12"
                sm="4"
                v-for="info in theInfos.slice(48)"
                :key="info.id"
            >
                <v-card class="mx-auto theArea" max-width="344" height="300px">
                    <v-card-text>
                        <h1 class="text-h4 text--primary">{{ info.title }}</h1>
                    </v-card-text>
                    <v-card-actions>
                        <router-link
                            :to="{ name: 'Show', params: { id: info.id } }"
                        >
                            <v-btn text color="teal accent-4" class="theBTN">
                                Learn More
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination
            v-model="page"
            :length="3"
            circle
            class="ma-10"
        ></v-pagination>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",

    data() {
        return {
            page: 1,
            count: 0,
            word: "ahmed eldeib",
        };
    },
    created() {
        axios
            .get("https://api.npoint.io/5c9bdac40333b898aa6a/infos")
            .then((res) => {
                this.$store.state.infos = res.data;
            });
    },
    computed: {
        theInfos() {
            return this.$store.getters.theInfos;
        },
    },
    watch: {
        page() {
            return window.scrollTo(0, 0);
        },
    },
};
</script>

<style scoped>
.theArea {
    position: relative;
}
.theBTN {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
