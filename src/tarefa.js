
import React from 'react';

import { Text, View } from 'react-native';

export default function Tarefa({data}){
    
    return(
        <View>
            <Text>{data.item}</Text>
        </View>
    )
}