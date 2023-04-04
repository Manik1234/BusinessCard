import React from "react";
import Card from "../component/Card";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { UserDetail } from "./BusinessDetails";
import { connect } from "react-redux";

interface ISavedDetails {
    userDetails: UserDetail;
    onDeleteHandler:(index: number) => void
    index: number;
}

const SavedDetails: React.FC<ISavedDetails> = (props: ISavedDetails) => {
    return (
        <Card key={Math.random()} cardStyle={styles.card}>
            <ScrollView>
                {
                    props.userDetails && 
                        <>
                            <Text style={styles.sectionTitle}>{props.userDetails.name}</Text>
                            <Text style={styles.sectionTitle}>{props.userDetails.occupation}</Text>
                            <Text style={styles.sectionTitle}>{props.userDetails.company}</Text>
                            <Text style={styles.sectionTitle}>{props.userDetails.email}</Text>
                            <Text style={styles.sectionTitle}>{props.userDetails.phone}</Text>
                            <Text style={styles.sectionTitle}>{props.userDetails.linkedin ?? ''}</Text>
                            <Button title="Delete" onPress={() => props.onDeleteHandler(props.index)} />
                        </>

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

export default connect()(SavedDetails);
