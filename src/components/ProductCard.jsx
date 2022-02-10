// Packages
import React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"

// import Empty from "../assets/empty-image.svg"

// Format date with Moment js
import Moment from "moment"

// Components
import CardContainer from "./CardContainer"
import ImageCard from "./ImageCard"
import EmptyImageCard from "./EmptyImageCard"
import NewTag from "./NewTag"
import Tag from "./Tag"

// Variables
import variables from "./variables"

export default function ProductCard({ record }) {
    // Display "New" badge if the package was added less than 7 days ago
    const day = 24 * 60 * 60 * 1000
    const today = new Date()
    const datePosted = new Date(record.fields["Posted"])
    const differenceDays = Math.round(Math.abs((today - datePosted) / day))

    // Format date
    Moment.locale("en")
    const postedDate = Moment(record.fields["Posted"]).format("DD.MM.yyyy")

    // Get tags
    const tags =
        record.fields["Product Categories"] &&
        record.fields["Product Categories"].length > 0 &&
        record.fields["Product Categories"].split(",")

    return (
        <CardContainer>
            {record.fields["Product Image"] ? (
                <ImageCard source={record.fields["Product Image"]} />
            ) : (
                <EmptyImageCard />
            )}

            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {record.fields["Product Name"]}
                        </Text>

                        <Text style={styles.date}>{postedDate}</Text>
                    </View>

                    {differenceDays <= 7 && <NewTag />}
                </View>

                {tags && (
                    <View style={styles.listTags}>
                        {tags.map((tag, i) => (
                            <Tag key={i} last={i === tags.length - 1 && true}>
                                {tag}
                            </Tag>
                        ))}
                    </View>
                )}
            </View>
        </CardContainer>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingLeft: variables.spacings.m,
        paddingRight: variables.spacings.m,
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },

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

    listTags: {
        alignItems: "flex-start",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
    },
})
