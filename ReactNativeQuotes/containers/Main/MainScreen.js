import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
} from 'react-native';

import IconButton from "../../components/Buttons/IconButton";
import { styles } from "./styles";

export default class MainScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            quote : null,
            author : null,
        };
    }

    componentWillMount()
    {
        this.getQuote();
    }

    getQuote()
    {
        fetch("https://talaikis.com/api/quotes/random/", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    quote : responseJson.quote,
                    author : responseJson.author,
                });
            })
            .catch((error) => { console.log(error); });
    }

    render() {
        if(this.state.quote === null || this.state.author === null)
        {
            return (
                <View style={styles.container}>
                    <ActivityIndicator color="#ffffff" size="large" />
                    <IconButton icon="refresh" action={this.getQuote.bind(this)}/>
                </View>
            );
        }
        else
        {
            return (
                <View style={styles.container}>
                    <Text style={styles.quote}>
                        { this.state.quote }
                    </Text>
                    <Text style={styles.author}>
                        { this.state.author }
                    </Text>
                    <IconButton icon="refresh" action={this.getQuote.bind(this)}/>
                </View>
            );
        }
    }
}

