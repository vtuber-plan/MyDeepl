<script setup lang="ts">

</script>

<template>
    <button class="switch-button">
        <div class="switch-button-div">

                <svg class="switch-icon">
                    <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7L20 7M20 7L16 3M20 7L16 11M16 17L4 17M4 17L8 21M4 17L8 13">
                    </path>
                </svg>
        </div>
    </button>
</template>

<style scoped>
.switch-button-div {
    border: None;
    width: 32px;
    height: 32px;
}

.switch-button {
    background-color: transparent;
    background-image: none;
    border: none;
    outline: none;
    cursor: pointer;
}
.switch-button:focus {
    color: #006494;
}

.switch-button:hover {
    color: #006494;
}


.switch-icon {
    width: 24px;
    height: 24px;
}
</style>
