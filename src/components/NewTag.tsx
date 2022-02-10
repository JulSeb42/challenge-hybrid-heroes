// "New" tag component
// Packages
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// Variables
import variables from "./variables"

// Function
export default function NewTag() {
    return (
        <View style={styles.tag}>
            {/* For border radiuses on iOS we have to wrap the text inside a <View> component */}
            <Text style={styles.tagText}>New</Text>
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    tag: {
        backgroundColor: variables.colors.gray1,
        display: "flex",
        alignItems: "center",
        padding: variables.spacings.m,
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        borderBottomEndRadius: 9,
        alignSelf: "flex-start",
    },

    tagText: {
        fontSize: 14,
        color: variables.colors.white,
        textTransform: "uppercase",
        fontWeight: "600",
    },
})
