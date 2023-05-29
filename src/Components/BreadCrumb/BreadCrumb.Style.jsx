import tw, {styled, theme, css} from "twin.macro"

export const BreadCrumbContainer = styled.div(({variant})=>[
    tw`flex items-center mb-10`,
    css`
        svg{
            height: 40px;
            width: 40px;
        }
        h2{
            font-weight: 700;
            font-size: 23px;
            text-align: left;
        }
        p{
            font-size: 17px;
        }
    `
])