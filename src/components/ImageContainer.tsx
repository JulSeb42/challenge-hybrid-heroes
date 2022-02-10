// Image container component
// Since the image can also be empty, I added this component not to repeat the styles
// Packages
import React from "react"
import { StyleSheet, View } from "react-native"

// Variables
import variables from "./variables"

export default function ImageContainer({ children }) {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        width: 85,
        height: 112,
        marginRight: variables.spacings.s,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})
