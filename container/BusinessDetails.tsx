import React from "react";
import { Alert, Button, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View, ViewStyle } from "react-native";
import Card from "../component/Card";
import { connect, DispatchProp, useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import { businessDetail } from "../action/businessDetail";

export interface UserDetail {
    businessDetail?: any;
    name: string;
    occupation: string;
    company: string;
    email: string;
    phone: string
    linkedin?: string;
}

interface Props {
    businessDetail: (data: DispatchProp) => void;
}

const BusinessDetails = (props: Props) => {
    const [user, setUserData] = React.useState<UserDetail>({ name: '', occupation: '', company: '', email: '', phone: '', linkedin: '' });

    const isEmailValid = (email: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    }

    const isLinkedinValid = (email: string) => {
        let reg = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm;
        return reg.test(email);
    }

    const showAlert = (title: string, message: string) => {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

    const handleClick = () => {
        if (!user.company || !user.email || !user.name || !user.occupation || !user.phone) {
            showAlert("Error", 'Please enter all details')
        } else if (user.email && !isEmailValid(user.email)) {
            showAlert("Error", 'Invalid Email ID');
        } else if (user.linkedin && !isLinkedinValid(user.linkedin)) {
            showAlert("Error", 'Invalid linkedin profile');
        } else {
            props?.businessDetail(user as any);
            showAlert("", 'Information has been saved');
            setUserData({ name: '', occupation: '', company: '', email: '', phone: '', linkedin: '' });
        }
    }
    return (
        <>
            <Card cardStyle={styles.card}>
                <ScrollView>
                    <Text style={styles.sectionTitle}>Enter person's contact info</Text>
                    <TextInput onChangeText={(text) => setUserData({ ...user, name: text })} value={user.name} style={styles.input} placeholder="Name" />
                    <TextInput onChangeText={(text) => setUserData({ ...user, occupation: text })} value={user.occupation} style={styles.input} placeholder="Occupation / Title" />
                    <TextInput onChangeText={(text) => setUserData({ ...user, company: text })} value={user.company} style={styles.input} placeholder="Company" />
                    <TextInput onChangeText={(text) => setUserData({ ...user, email: text })} value={user.email} style={styles.input} placeholder="Email Address" />
                    <TextInput onChangeText={(text) => setUserData({ ...user, phone: text })} value={user.phone} style={styles.input} placeholder="Phone Number" />
                    <TextInput onChangeText={(text) => setUserData({ ...user, linkedin: text })} value={user.linkedin} style={styles.input} placeholder="LinkedIn URL (optional)" />
                    <Button onPress={handleClick} title="Save" />
                </ScrollView>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Centered horizontally
    },
    card: {
        marginTop: 30,
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        businessDetail: (data: any) => dispatch(businessDetail(data))
        // other callbacks go here...
    })
};

export default connect(null, mapDispatchToProps)(BusinessDetails);

