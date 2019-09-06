import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterMenu extends Component {
  render() {
    return (
        <Footer>
            <FooterTab style={styles.footer}>
                <Button>
                    <Icon type="FontAwesome" name="home" style={styles.iconFooter}/>
                </Button>
                <Button>
                    <Icon type="FontAwesome" name="history" style={styles.iconFooter}/>
                </Button>
                <Button>
                    <Icon type="FontAwesome" name="user-circle" style={styles.iconFooter}/>
                </Button>
            </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: "#FFFFFF",
        elevation:5,
    },
    iconFooter:{
        fontSize: 20
    }
});
