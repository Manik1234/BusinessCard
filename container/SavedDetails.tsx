import React from "react";
import Card from "../component/Card";
import { ScrollView, StyleSheet, Text } from "react-native";
import { UserDetail } from "./BusinessDetails";

interface ISavedDetails {
    userDetails: UserDetail[];
}

const SavedDetails: React.FC<ISavedDetails> = (props: ISavedDetails) => {
    return (
        <Card cardStyle={styles.card}>
            <ScrollView>
                {
                    props.userDetails.map((userDetail: UserDetail) =>
                        <>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).name}</Text>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).occupation}</Text>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).company}</Text>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).email}</Text>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).phone}</Text>
                            <Text style={styles.sectionTitle}>{JSON.parse(userDetail).linkedin ?? ''}</Text>
                        </>)

                }
            </ScrollView>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center', // Centered horizontally
    },
    card: {
        marginTop: 70,
        height: 200,
        width: '100%',
    },
    sectionTitle: {
        paddingBottom: 15,
        fontSize: 15,
        color: '#000000'
    },
    input: {
        paddingBottom: 10,
        paddingTop: 10
    }
});

export default SavedDetails;