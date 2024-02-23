import React from 'react';
import { Text, View } from 'react-native';


const App: React.FC = () => {
    return(
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{fontFamily: 'Poppins-Regular'}}>Wallet App</Text>
        </View>
    )
}

export { App }
