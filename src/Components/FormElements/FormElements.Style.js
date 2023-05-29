import tw, {styled, theme, css} from "twin.macro"

export const ButtonStyle = styled.button(({variant, disabled})=>[
    tw`flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white border font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
    css`
        ${variant==='primary' && tw`bg-green-700 hover:bg-green-800`}
        ${variant==='danger' && tw`bg-red-700 hover:bg-red-800`}
        ${variant==='warning' && tw`bg-yellow-400 hover:bg-yellow-500`}
        ${variant==='default' && tw`text-gray-900 bg-gray-200 hover:bg-gray-300`}
        ${disabled && tw`pointer-events-none bg-gray-400`}
    `
])

export const RadioInputStyle = styled.div(()=>[
    tw`flex items-center mr-4`,
    css`
        input{ 
            ${tw`w-4 h-4 text-red-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
        }
        label{
            ${tw`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
        }
    `
])

export const InputStyle = styled.div(({error})=>[
    css`
        label{
            display: block;
            margin-top: 10px;
            text-align: left;
        }
        input{
            width: 100%;
            border: 1px solid #ababab;
            border-radius: 4px;
            padding: 7px 15px;
            margin: 5px 0;
            &:focus{
                border: 1px solid #ababab;
                outline: none;
                ${error && tw`border border-red-500 text-red-500 placeholder-red-700`}
            }
            ${error && tw`border border-red-500 text-red-500 placeholder-red-700`}
        }
        .error-message{
            ${error && tw`text-red-700`}
        }
    `
])