import React, { Component } from 'react'
import { StyleSheet,Text,Button } from 'react-native';
import { Container,Content,Form,Item,Input } from 'native-base';
import { NavigationActions } from 'react-navigation'


export default class Login extends Component {
handleLogin(){
  
    return NavigationActions.reset({
        index: 0,
        actions:[
            NavigationActions.navigate({routeName: 'Main'})
        ]
    })
}
    render(){
      return(
        <Container style={styles.Container} >
            <Form>
                <Item>
                    <Input placeholder="UserName" />
                </Item>
                <Item>
                    <Input placeholder="Passowrd" />
                </Item>
           </Form>     
           <Button
                onPress={()=> this.props.navigation.dispatch(this.handleLogin())}
                title="Login">
           </Button>
        </Container>
      )
    }
    };

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
    }
});    