// Category tag component
// Packages
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// Variables
import variables from "./variables"

export default function Tag({ children, ...props }) {
    return (
        <View style={[styles.container, props.last && styles.noMargin]}>
            {/* For border radiuses on iOS we have to wrap the text inside a <View> component */}
            <Text style={styles.tag}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: variables.spacings.xs,
        marginBottom: variables.spacings.xs,
        paddingTop: variables.spacings.xxs,
        paddingBottom: variables.spacings.xxs,
        paddingLeft: variables.spacings.m,
        paddingRight: variables.spacings.m,
        backgroundColor: variables.colors.lightBlue,
        borderRadius: 48,
    },

    tag: {
        fontSize: 12,
        lineHeight: 16,
    },

    noMargin: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
})
