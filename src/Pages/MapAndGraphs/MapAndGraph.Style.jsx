import tw, {styled, css} from "twin.macro"

export const MapContainerStyle = styled.div(()=>[
    css`
        .leaflet-container {
            height: 450px;
            width: auto;
            position: sticky;
        }
    `
])