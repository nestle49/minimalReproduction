<template>
    <div :class="['comment-textarea', { required: required && !value }]">
        <div
            v-if="$slots.label"
            class="slot-wrapper d-flex align-items-center"
        >
            <slot
                name="label"
                v-bind="{ name }"
            />
        </div>

        <textarea
            :id="name"
            class="d-block w-100"
            :name="name"
            :maxlength="maxLength"
            :value="value"
            @input="$emit('input', { [name]: ($event.target as HTMLTextAreaElement).value })"
        />
    </div>
</template>

<script setup lang="ts">
interface ITextAreaProps {
    maxLength?: number
    required?: boolean
    name: string
    value?: string
}

withDefaults(defineProps<ITextAreaProps>(), {
    maxLength: 300,
    required: false,
    value: ''
})

defineEmits<(event: 'input', payload: Record<ITextAreaProps['name'], ITextAreaProps['value']>) => void>()
</script>

<style lang="scss" scoped>
.comment-textarea {
    margin-top: 12px;
    font-size: 16px;
    color: var(--grey);

    &.required {
        color: var(--server_main_color);
    }

    .slot-wrapper {
        margin-bottom: 12px;

        :deep(svg) {
            margin-right: 15px;
        }
    }

    textarea {
        height: 100px;
        padding: 10px 17px;
        outline: none;
        border: unset;
        border-radius: var(--border_radius);
        min-height: 82px;
        background: var(--background_select);
        color: var(--color_main);
    }
}
</style>
