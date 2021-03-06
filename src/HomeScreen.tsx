import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useEffect } from "react"
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native"
import { Appbar, FAB } from "react-native-paper"
import { useSelector, useDispatch } from "react-redux"
import { selectors, actions } from "./store/inventory"
import { RootState } from "./store"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackScreenProps } from "@react-navigation/stack"

import ProductCard from "./components/ProductCard"
import variables from "./components/variables"

export default (props: StackScreenProps<{}>) => {
    const fetching = useSelector((state: RootState) => state.inventory.fetching)
    const inventory = useSelector(selectors.selectInventory)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = props.navigation.addListener("focus", () => {
            dispatch(actions.fetchInventory())
        })
        return unsubscribe
    }, [props.navigation])

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF", padding: 0 }}>
            <Appbar.Header>
                <Appbar.Content title="Inventory" />
            </Appbar.Header>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={fetching}
                        onRefresh={() => dispatch(actions.fetchInventory())}
                    />
                }
                style={{ padding: 0 }}
            >
                <SafeAreaView
                    // Disable default padding
                    edges={["bottom", "left", "right"]}
                    style={{ paddingTop: 0, marginTop: 0 }}
                >
                    {/* Map all the products */}
                    <ScrollView style={styles.listProducts}>
                        {inventory.map((record, i) => (
                            <ProductCard record={record} key={i} />
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>

            <SafeAreaView style={styles.fab}>
                <FAB
                    icon={() => (
                        <MaterialCommunityIcons
                            name="barcode"
                            size={24}
                            color="#0B5549"
                        />
                    )}
                    label="Scan Product"
                    onPress={() => props.navigation.navigate("Camera")}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 16,
        width: "100%",
        flex: 1,
        alignItems: "center",
    },

    listProducts: {
        display: "flex",
        flexDirection: "column",
        padding: variables.spacings.l,
    },
})
