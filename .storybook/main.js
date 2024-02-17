/** @type { import('@storybook/react-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
const config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    components: "/components",
                }
            }
        })
    }
};
export default config;
