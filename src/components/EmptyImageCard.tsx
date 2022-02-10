// Packages
import React from "react"
import { Image } from "react-native"

// Components
import ImageContainer from "./ImageContainer"

export default function EmptyImageCard() {
    return (
        <ImageContainer>
            <Image
                source={require("../images/empty-image.png")}
                width={48}
                height={48}
            />
        </ImageContainer>
    )
}
