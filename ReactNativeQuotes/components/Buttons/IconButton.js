import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ElevatedView from "react-native-elevated-view";

import { styles } from "./styles";

export default class IconButton extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.action() }}>
                <ElevatedView style={styles.button} elevation={7}>
                    <Icon name={this.props.icon} style={styles.icon}/>
                </ElevatedView>
            </TouchableOpacity>
        );
    }
}

