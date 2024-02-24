<template>
    <div class="container">
        <h1>UI-kit Reproduction Demo</h1>

        <TextArea
            key="textarea"
            :max-length="200"
            name="name"
            label="label"
            value="val"
        >
                <template #label>
                   NAME
                </template>
            </TextArea>
    </div>
</template>

<script setup lang="ts">
import TextArea from '~/components/TextArea.vue'
</script>

<style lang="scss" scoped>
.container {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;
}

.elements-list {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
}

.fluid {
    grid-column: 1 / -1;
    max-width: 100%;
}

.modern-style {
    --ui-button-large-border-radius: 40px;
    --ui-button-medium-border-radius: 40px;
    --ui-button-small-border-radius: 40px;

    --ui-count-default-border-radius: 40px;
    --ui-count-medium-border-radius: 40px;
    --ui-count-small-border-radius: 40px;

    --ui-text-field-small-border-radius: 40px;
    --ui-text-field-medium-border-radius: 40px;
    --ui-text-field-large-border-radius: 40px;

    --ui-chips-border-radius: 20px;
}
</style>
