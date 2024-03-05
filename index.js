import { View,Text, StyleSheet, Pressable } from "react-native";


export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style ={styles.title}>Conta Criada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>1234324</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24, 24, 0.6)",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    coontent:{
        backgroundColor:"#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize:25,
        fontWeight: "bold",
        color:"#0000",
        marginBottom: 24
    },
    text:{
        color:"#FFF",
        textAlign:"center"
    }
})