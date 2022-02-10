// Packages
import React from "react"
import { StyleSheet, Image } from "react-native"

// Components
import ImageContainer from "./ImageContainer"

// Variables
import variables from "./variables"

export default function ImageCard({ source }) {
    return (
        <ImageContainer>
            <Image source={{ uri: source }} style={styles.image} />
        </ImageContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        marginRight: variables.spacings.s,
    },
})
