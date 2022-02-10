// Packages
import React from "react"
import { Image, StyleSheet } from "react-native"

// Components
import ImageContainer from "./ImageContainer"

export default function EmptyImageCard() {
    return (
        // For this image to work properly on iOS and desktop the size has to be both in the styles and in the <Image> component
        <ImageContainer>
            <Image
                source={require("../images/empty-image.png")}
                width={80}
                height={80}
                style={styles.img}
            />
        </ImageContainer>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
    },
})
