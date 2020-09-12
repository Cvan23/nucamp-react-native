import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';




class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //partners: PARTNERS
    };
  }

  static navigationOptions = {
    title: 'About Us'
  }

  render() {
    return (
    <ScrollView>
      
    </ScrollView>
    );
  }
}

export default About;