import {Button, Text} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {NAV_INFO} from "../navigation_constants";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View} from "react-native";
import {FormBuilder} from "react-native-paper-form-builder";


export function FormScreen(){
    const [profile, setProfile] = useState({name: "name", email: "email@email.com", password: "password", gender: "", favorite: "Hybrid"});

    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: profile, mode: "onChange"
    });

    return(
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={120}
                style={styles.cover}>
                <ScrollView>
                    <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                        [
                            {
                                name: 'name',
                                type: 'text',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    },
                                },
                                textInputProps: {
                                    label: 'Name'
                                },
                            },
                            {
                                name: 'email',
                                type: 'email',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                    pattern: {
                                        value:
                                            /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                                        message: 'Email is invalid',
                                    },
                                },
                                textInputProps: {
                                    label: 'Email',
                                },
                            },
                            {
                                name: 'password',
                                type: 'password',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password is to short, min 8 characters',
                                    },
                                },
                                textInputProps: {
                                    label: 'Password',
                                },
                            },
                            {
                                name: 'gender',
                                type: 'select',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'Gender is required',
                                    },
                                },
                                textInputProps: {
                                    label: 'Gender',
                                },
                                options: [
                                    {
                                        value: 'Female',
                                        label: 'Female',
                                    },
                                    {
                                        value: 'Male',
                                        label: 'Male',
                                    },
                                    {
                                        value: 'Other',
                                        label: 'Other',
                                    },
                                ],
                            },
                            {
                                name: 'favorite',
                                type: 'autocomplete',
                                rules: {
                                    required: {
                                        value: true,
                                        message: 'favorite course is required',
                                    },
                                },
                                textInputProps: {
                                    label: 'Favorite course',
                                },
                                options: [
                                    {
                                        label: 'Analyse',
                                        value: 'Analyse',
                                    },
                                    {
                                        label: 'Dynamische Webapps',
                                        value: 'Dynamische Webapps',
                                    },
                                    {
                                        label: 'Hybrid Apps',
                                        value: 'Hybrid Apps',
                                    },
                                    {
                                        label: 'Native Apps',
                                        value: 'Native Apps',
                                    },
                                    {
                                        label: 'Professionalisering',
                                        value: 'Professionalisering',
                                    },
                                    {
                                        label: 'Startende professional',
                                        value: 'Startende professional',
                                    },
                                ],
                            },
                        ]
                    }/>
                    <View style={styles.hor}>
                        <SaveButton
                            mode={'contained'}
                            onSave={handleSubmit(data => setProfile(data))}/>
                        <GoInfoButton profile={profile}>go to info</GoInfoButton>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>

    );
}

function GoInfoButton({profile}){
    const navigation = useNavigation();
    return(
      <Button compact={true} mode="contained" onPress={() => navigation.navigate(NAV_INFO, {profile: profile})}>Go to Info</Button>
    );
}

function SaveButton({onSave}){
    return(
        <Button compact={true} dark={true} mode="contained" onPress={onSave}>Save</Button>
    );
}

const styles = StyleSheet.create({
    ver: {
        flexDirection: "column",
    },
    hor: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    cover: {
        flex: 1,
        margin: 15,
    },
})