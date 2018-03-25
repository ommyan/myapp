import React, { Component } from 'react'
import { Text, Modal, TouchableHighlight, Button, View } from 'react-native'
import { Container, Header, Content, List, ListItem, 
    Left, Body, Right, Thumbnail, Title,
    Fab, Icon, Form,Item, Input
} from 'native-base';
import axios from 'axios'
export default class Main extends Component {
    constructor(){
      super();
      this.state={
        modalVisible: false,
        text: '',
        list: [],
        arrlist: [],
        name: ''
      }
    }
    handleModalVisible = () => {
      this.setState({modalVisible: !this.state.modalVisible})
    }
    componentWillMount(){
      this.all_todos()
    }
    all_todos(){
      axios
      .get('http://rest.learncode.academy/api/yan/hobby')
      .then((result=> {
        console.log(result)
        this.setState({list: result.data})
      }))
    }
    handleChangeText = (key, value) => {
      let formValues = {...this.state.formValues}
      formValues[key] =value
      this.setState({
        formValues
      })
    }

    handleSubmit=() => {
      axios
      .post('http://rest.learncode.academy/api/yan/hobby' ,
      this.state.formValues
      )
      .then((result)=>{
        this.all_todos()
      })
      this.handleModalVisible()
    }
    render(){
      return(
        <Container>
         <Content>
          <List>
            {this.state.list.map((item,index)=> {
              return (
                <ListItem key={item.id}  avatar >
                  <Left>
                  </Left>
                  <Body>
                    <Text key={index}>{item.seni} & {item.olahraga}</Text>
                  </Body>
              </ListItem>
              )
             })} 
          </List>
        </Content>
        <Fab onPress={this.handleModalVisible}>
           <Icon name='add'/> 
        </Fab>

        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={false}
          onRequestClose={()=>{}}
          title="Todo List"
          >
          <Header>
          <Left>
              {/* <Icon name='arrow-back' /> */}
          </Left>
          <Body>
            <Title>Todo List</Title>
          </Body>
          <Right>
          <Button  onPress={this.handleModalVisible} title="Close" />
          </Right>
        </Header>
            <Form>
                <Item>
                    <Input 
                    onChangeText={(text) => this.handleChangeText('seni',text)}
                    placeholder="Title" />
                </Item>
                <Item>
                    <Input 
                    onChangeText={(text) => this.handleChangeText('olahraga',text)}
                    placeholder="olahraga" />
                </Item>
            </Form>     
            <Button  onPress={this.handleSubmit} title="Submit" />
        </Modal>

        </Container>
      )
    }
    }