import tw, {styled, theme, css} from "twin.macro"

export const LoadingStyle = styled.div(()=>[
    tw`absolute flex flex-col items-center justify-center h-screen w-full z-10 top-0 left-0`,
    css`
        background: #000000cc;
    `
])