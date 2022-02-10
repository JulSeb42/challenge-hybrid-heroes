// Card container component
// Packages
import React from "react"
import { View, StyleSheet } from "react-native"

// Variables
import variables from "./variables"

export default function CardContainer({ children }) {
    return <View style={[styles.container, styles.shadowProp]}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: variables.spacings.m,
        backgroundColor: variables.colors.cardBackground,
        padding: variables.spacings.s,
        borderRadius: 4,
        alignContent: "center",
        flexDirection: "row",
    },

    shadowProp: {
        shadowColor: variables.colors.shadowColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
})
