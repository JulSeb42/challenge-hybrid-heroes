// Text container component
// Packages
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// Format date with Moment js
import Moment from "moment"

// Variables
import variables from "./variables"

export default function TextContainer({ title, date }) {
    // Format date
    Moment.locale("en")
    const postedDate = Moment(date).format("DD.MM.yyyy")

    return (
        <View style={styles.textContainer}>
            {/* Title */}
            <Text style={styles.title} numberOfLines={1}>
                {/* Add an empty state */}
                {title ? title : "Product name"}
            </Text>

            {/* Date */}
            <Text style={styles.date}>{postedDate}</Text>
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
