import React from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { UserDetail } from "../container/BusinessDetails";

interface IEmptyDetails {
    onPresshandler: () => void;
    isListEmpty: boolean
    userDetails: UserDetail[];
}

const EmptyDetails: React.FC<IEmptyDetails> = (props: IEmptyDetails) => {
    return (
        <View style={props.isListEmpty ? styles.container : styles.containerNoFlex}>
            {props.userDetails.length === 0 && <Text>{"List is empty"}</Text>}
            <Button onPress={props.onPresshandler} title="Add Business Card" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerNoFlex: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default EmptyDetails