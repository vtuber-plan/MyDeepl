<script setup lang="ts">

defineProps<{
    text: string,
    subtext: string
}>()
</script>

<template>
    <button class="card-button">
        <div class="card-button-body">
            <div class="button-icon">
                <slot></slot>
            </div>
            <div class="button-text-area">
                <div class="button-text">
                    {{ text }}
                </div>
                <div class="button-subtext">
                    {{ subtext }}
                </div>
            </div>
        </div>
    </button>
</template>

<style scoped>
button {
    background-color: transparent;
    background-image: none;
    border: none;
    outline: none;
}

.card-button-body {
    display: block;
    background-color: #fff;
    border: 1px solid #dae1e8;
    border-radius: 0.5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    min-width: 160px;
    max-width: 320px;
    height: 66px;
    cursor: pointer;
    padding: 12px;
}

.button-icon {
    display: block;
    float: left;
    padding: 8px 10px 8px 4px;
    color: #006494;
}
.button-text-area {
    display: block;
    float: left;
}
.button-text {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #006494;
    line-height: 22px;
    text-align: left;
}
.button-subtext {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6e6e6e;
    text-align: left;
}
button:focus .button-icon {
  color: #000000;
}
button:focus .button-text {
  color: #000000;
}

button:focus .card-button-body {
    border-bottom: 4px solid #006494;
}

button:hover .card-button-body {
    background-color: #f4f9fd;
}

</style>
