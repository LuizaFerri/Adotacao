import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e08d77',
        
    },

    titulo: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 40,
        fontFamily:'Cinzel_700Bold'
        

    },
    campos: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#FFF",
        width: '90%',
        borderRadius: 50,
        height: 37,
        padding: 10

    },
    email: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 23,
        fontFamily:'Cinzel_700Bold'

    },
    senha: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 23,
        marginTop: 40,
        fontFamily:'Cinzel_700Bold'
    },
    containerBnt: {
        alignItems: 'center',
        marginTop: 10
    },
    loginGoogle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        textDecorationLine: 'underline',
        elevation: 15,
        marginBottom: 50
    },
    texto: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20, 
        padding: 20,
       

    },
    cadastro:{
        marginTop:35,
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        elevation: 15,
        fontFamily:'Cinzel_700Bold'
       
        
    },
    cadastro1:{
        fontSize: 17,
        color: "#dee2e6" ,
        textAlign: 'center',
        elevation: 15,
        marginBottom:50,
        fontFamily:'Cinzel_700Bold'
      
    },
    login__msg:(text='none')=>({
        fontSize: 15,
        fontFamily:'Cinzel_700Bold',
        color:"red",
        marginBottom: 15,
        display: text
    }),
    msg:{
        alignItems:'center',
        justifyContent:'center'
    }

})