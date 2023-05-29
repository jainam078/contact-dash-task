import tw, {styled, theme, css} from "twin.macro"

export const CardStyle = styled.div(({status})=>[
    tw`p-4 rounded-md bg-gray-200 dark:bg-neutral-200 relative overflow-hidden hover:bg-stone-300`,
    css`
        p{
            margin: 15px 0;
            display: flex;
            align-item: center;
            justify-content: space-between;
            width: 100%;
            label{
                font-weight: 500;
            }
            span{
                position: relative;
            }
            &:nth-child(3) span:before{
                content: '';
                position: absolute;
                height: 15px;
                width: 15px;
                background: red;
                border-radius: 50%;
                left: -19px;
                top: 5px;
                ${status==='Active' && `
                    background: green;
                `}
            }
        }
    `
])