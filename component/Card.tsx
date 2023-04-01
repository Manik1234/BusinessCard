import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface ICardProps {
    cardStyle: ViewStyle;
    children: JSX.Element;
}
const Card: React.FC<ICardProps> = ({ cardStyle, children }) => {
    return (
        <View style={[style.card, cardStyle]}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10

    }
})

export default Card