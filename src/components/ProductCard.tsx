// Product card component
// Packages
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// Components
import CardContainer from "./CardContainer"
import ImageCard from "./ImageCard"
import EmptyImageCard from "./EmptyImageCard"
import NewTag from "./NewTag"
import Tag from "./Tag"
import TextContainer from "./TextContainer"

// Variables
import variables from "./variables"

export default function ProductCard({ record }) {
    // Calculate difference between today and when the product was posted
    const day = 24 * 60 * 60 * 1000
    const today = new Date()
    const datePosted = new Date(record.fields["Posted"])
    const differenceDays = Math.round(Math.abs((today - datePosted) / day))

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
                    <TextContainer
                        title={record.fields["Product Name"]}
                        date={record.fields["Posted"]}
                    />

                    {/* Show the "NEW" tag only if the item was posted 7 days ago or less */}
                    {differenceDays <= 7 && <NewTag />}

                    {/* Test "NEW" tag */}
                    {/* {differenceDays <= 10000 && <NewTag />} */}
                </View>

                {/* Display all the tags */}
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

    listTags: {
        alignItems: "flex-start",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
    },
})
