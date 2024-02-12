import type { ButtonHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export enum UiButtonType {
    DEFAULT = 'default',
    OUTLINED = 'outlined',
    TEXT = 'text'
}

export enum UiButtonColorMode {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    NEUTRAL = 'neutral',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARN = 'warn'
}

export enum UiButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export interface UiBaseButtonProps {
    disabled?: boolean
    nativeType?: ButtonHTMLAttributes['type']
    /*
     * @description URL. Автоматически определяет, является компонент ссылкой или кнопкой
     */
    to?: RouteLocationRaw
    /**
     * @description Контент в верхнем регистре
     */
    uppercase?: boolean
    /**
     * @description Обнулить padding. Задать одинаковую ширину и высоту
     */
    square?: boolean
    /**
     * @description Задает ширину 100%
     */
    expanded?: boolean
    /**
     * @requires Отсутствие `to` пропса
     * @description Атрубит 'aria-label' для кнопок
     */
    ariaLabel?: string
    external?: boolean
}
