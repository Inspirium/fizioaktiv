import { useGtag, useState } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp ) => {
    const { property } = useState();
    const addDomain = () => {
        property.value = {
            id: "G-4XGGTXLTB4",
        };
    };
})
