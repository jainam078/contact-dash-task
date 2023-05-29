import tw, {styled, theme, css} from "twin.macro"

export const NoRecordFoundStyle = styled.div(()=>[
    tw`p-10 rounded bg-gray-200 dark:bg-gray-800 text-center`,
    css`
        svg{
            height: 100px;
            width: 100px;
            margin: 0 auto;
            margin-bottom: 10px;
        }
        h2{
            font-weight: 700;
            font-size: 25px;
        }
        p{
            font-size: 17px;
        }
    `
])