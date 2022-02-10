// Packages
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// Variables
import variables from "./variables"

export default function TextContainer({ title, date }) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
                {/* Add an empty state */}
                {title ? title : "Product name"}
            </Text>

            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginBottom: variables.spacings.s,
    },

    title: {
        fontWeight: "900",
        fontSize: 20,
        marginRight: variables.spacings.s,
    },

    date: {
        fontSize: 12,
    },
})
