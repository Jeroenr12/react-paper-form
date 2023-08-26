import {Card, Text} from "react-native-paper";
import {View, StyleSheet} from "react-native";


export function InfoScreen({route}){
    const {profile} = route.params;
    return(
        <View style={styles.cover}>
            <Card mode="outlined">
                <Card.Title  titleVariant="headlineLarge" subtitleVariant="headlineSmall" title="Info" subtitle={profile.name}/>
                <Card.Content >
                    <View style={styles.ver}>
                        <Text variant="titleLarge">email: {profile.email}</Text>
                        <Text variant="titleLarge">password: {profile.password}</Text>
                        <Text variant="titleLarge">Gender: {profile.gender}</Text>
                        <Text variant="titleLarge">Favorite course: {profile.favorite}</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
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
      margin: 5,
        // backgroundColor:,
    },
})