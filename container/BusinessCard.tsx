import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { createStore, Dispatch } from 'redux';
import { connect, DispatchProp, Provider } from 'react-redux';
import React from 'react';
import EmptyDetails from '../component/EmptyDetails';
import allReducers from '../reducer/businessDetailReducer';
import BusinessDetails, { UserDetail } from './BusinessDetails';
import SavedDetails from './SavedDetails';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { businessDetail, deleteBusinessDetail } from '../action/businessDetail';

interface Props {
    businessDetail: UserDetail;
    businessDetailAction: (data: DispatchProp) => void;
    deleteBusinessDetail: (index: number) => void;
}


function BusinessCard(props: Props) {
    const [details, setDetails] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetail[]>([]);
    const navigation = useNavigation();

    const onPresshandler = () => {
        navigation.navigate('BusinessDetails', {});
    }

    const onDelete = (index: number) => {
        props?.deleteBusinessDetail(index);
    }

    const savedCards = props.businessDetail;    

    return (
        <>
            <SafeAreaView style={styles.container}>
                {savedCards.businessDetail.businesUsersCard === undefined || 
                savedCards.businessDetail.businesUsersCard.length === 0 ?
                    <View style={styles.container}>
                        <EmptyDetails userDetails={userDetails} isListEmpty={!details} onPresshandler={onPresshandler} />
                        <Button onPress={onPresshandler} title="Add Business Card" />
                    </View> :
                    <ScrollView style={{ flex: 1, width: '90%' }}>
                        <Button onPress={onPresshandler} title="Add Business Card" />
                        {savedCards.businessDetail.businesUsersCard &&
                            savedCards.businessDetail.businesUsersCard.map((savedCards: UserDetail, index: number) =>
                                savedCards && <SavedDetails key={index} index={index} onDeleteHandler={onDelete} userDetails={savedCards} />)
                        }
                    </ScrollView>
                }

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const mapStateToProps = (state: UserDetail) => ({
    businessDetail: state.businessDetail
}
)

const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        businessDetailAction: (data: any) => dispatch(businessDetail(data)),
        deleteBusinessDetail: (index: number) => dispatch(deleteBusinessDetail(index))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCard);
