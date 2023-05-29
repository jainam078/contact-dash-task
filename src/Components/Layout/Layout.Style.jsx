
import tw, {styled, theme, css} from "twin.macro"

export const AppSideBar = styled.aside(({isCollapse})=>[
    tw`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 translate-x-0 -translate-x-full dark:bg-gray-800 dark:border-gray-700`,
    css`
        ${isCollapse && tw`-translate-x-full`}
    `
])
