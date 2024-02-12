import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AutoImportOptions } from '../../pluguins/auto-import-options'

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {
            plugins: [AutoImport(AutoImportOptions)]
        },
        vuePluginOptions: {}
    }),
    lang: 'en-US',
    title: '🦄 UI-kit',
    description: 'Vue 3 component library',
    theme: defaultTheme({
        navbar: [
            {
                text: 'GitLab',
                link: 'https://git.lan/fs-frontend/products/packages/ui-kit'
            }
        ],
        sidebar: [
            {
                text: 'Introduction',
                link: '/'
            },
            {
                text: 'Components',
                collapsible: true,
                children: getComponents()
            }
        ]
    }),
    markdown: {
        /**
         * @see https://vuepress.github.io/guide/markdown.html#import-code-blocks
         */
        importCode: {
            handleImportPath: (str) => str.replace(/^~/, path.resolve(__dirname, '../../src'))
        }
    },
    /**
     * @see https://v2.vuepress.vuejs.org/guide/assets.html#packages-and-path-aliases
     */
    alias: {
        '~': path.resolve(__dirname, '../../src')
    }
})

function getComponents() {
    const components = [
        { text: 'UiSwitch', link: '/components/uiSwitch/uiSwitch' },
        { text: 'UiCheckbox', link: '/components/uiCheckbox/uiCheckbox' },
        { text: 'UiModal', link: '/components/uiModal/uiModal' },
        { text: 'UiRating', link: '/components/uiRating/uiRating' },
        { text: 'UiTab', link: '/components/uiTab/uiTab' },
        { text: 'UiRange', link: '/components/uiRange/uiRange' },
        { text: 'UiBreadcrumbs', link: '/components/uiBreadcrumbs/uiBreadcrumbs' },
        { text: 'UiRadio', link: '/components/uiRadio/uiRadio' },
        { text: 'UiCount', link: '/components/uiCount/uiCount' },
        { text: 'UiPagination', link: '/components/uiPagination/uiPagination' },
        { text: 'UiButton', link: '/components/uiButton/uiButton' },
        { text: 'UiTextField', link: '/components/uiTextField/uiTextField' },
        { text: 'UiFileInput', link: '/components/uiFileInput/uiFileInput' },
        { text: 'UiList', link: '/components/UiList/UiList' },
        { text: 'UiQuote', link: '/components/UiQuote/UiQuote' },
        { text: 'UiLoader', link: '/components/UiLoader/UiLoader' },
        { text: 'UiHeading', link: '/components/UiHeading/UiHeading' },
        { text: 'UiUnderline', link: '/components/UiUnderline/UiUnderline' },
        { text: 'UiPopover', link: '/components/UiPopover/UiPopover' },
        { text: 'UiScroll', link: '/components/UiScroll/UiScroll' },
        { text: 'UiDropdown', link: '/components/UiDropdown/UiDropdown' },
        { text: 'UiTable', link: '/components/UiTable/UiTable' },
        { text: 'UiTextArea', link: '/components/UiTextArea/UiTextArea' },
        { text: 'UiTimePicker', link: '/components/UiTimePicker/UiTimePicker' },
        { text: 'UiDatePicker', link: '/components/UiDatePicker/UiDatePicker' },
        { text: 'UiDateTimePicker', link: '/components/UiDateTimePicker/UiDateTimePicker' },
        { text: 'UiAlert', link: '/components/UiAlert/UiAlert' },
        { text: 'UiColorPicker', link: '/components/uiColorPicker/UiColorPicker' }
    ]
    return components.sort((a, b) => a.text.localeCompare(b.text))
}
