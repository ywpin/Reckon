import React, { Component } from 'react'
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, Alert, Platform, FlatList, Dimensions, TextInput } from 'react-native'
import { Constants } from 'expo';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './flatListData';
import BasicFlatList from './BasicFlatList';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newCategory: '',
			newCost: ''
		};
	}

	showAddModal = () => {
		this.refs.myModal.open();
	}

	generateKey = (numberOfCharacters) => {
		return require('random-string')({length: numberOfCharacters});
	}

	render() {
		return (
			<Modal ref={"myModal"} 
				style={{justifyContent: 'center', 
						borderRadius: 5, 
						shadowRadius: 10, 
						width: screen.width - 80, 
						height: 280 }} 
				position='center'
				backdrop={true}
				onClosed={() => {}}
				>
				<Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 40}}>New Expense</Text>
				<TextInput 	
					style={{height: 40, 
							borderBottomColor: 'gray', 
							marginLeft: 30, 
							marginRight: 30,
							marginTop: 20,
							marginBottom: 10,
							borderBottomWidth: 1}}
					onChangeText={(text) => this.setState({newCategory: text})}
					placeholder= "Enter new Category"
					value={this.state.newCategory}
				/>
				<TextInput 	
					style={{height: 40, 
							borderBottomColor: 'gray', 
							marginLeft: 30, 
							marginRight: 30,
							marginTop: 20,
							marginBottom: 10,
							borderBottomWidth: 1}}
					onChangeText={(text) => this.setState({newCost: text})}
					placeholder= "Cost"
					value={this.state.newCost}
					keyboardType = 'numeric'
				/>
				<Button style={{ fontSize: 18, color: 'white'}} 
						containerStyle={{ padding: 8,
							marginLeft: 70,
							marginRight: 70,
							height: 40,
							borderRadius:6,
							backgroundColor: 'blue'}}
						onPress={() => {
							if (this.state.newCategory.length == 0 || this.state.newCost.length == 0) {
								alert("You must enter the category");
								return;
							}
							const newKey = this.generateKey(24);
							const newCategorys = {
								key: newKey,
								name: this.state.newCategory,
								foodDescription: this.state.newCost
							};
							flatListData.push(newCategorys);
							this.props.parentFlatList.refreshFlatList(newKey);
							this.refs.myModal.close();
						}}>
						Save
					</Button>
			</Modal>
		);
	}
}
