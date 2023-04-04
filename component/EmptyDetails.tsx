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
        <>
            {props.isListEmpty && <Text>{"List is empty"}</Text>}
        </>
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