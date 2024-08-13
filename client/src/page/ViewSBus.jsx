import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ViewSBus = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    throw new Error('Token does not exist');
                }
                const response = await axios.get('http://192.168.1.6:5000/api/auth/buses', {
                    headers: {
                        'auth-token': token,
                    },
                });
                setBuses(response.data.data);
            } catch (error) {
                console.error("Error fetching buses:", error);
                setError(error.message || 'Failed to fetch buses');
            } finally {
                setLoading(false);
            }
        };
    
        fetchBuses();
    }, []);
    
    return (
        <View style={styles.container}>
            <FlatList
                data={buses}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.Busname}</Text>
                        <Text>{item.OwnerName}</Text>
                        <Text>{item.Phone}</Text>
                        <Text>{item.location}</Text>
                        <Text>{item.descripe}</Text>
                         <Button title='delete' onPress={()=>{}}/>                   
                                        </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ViewSBus;
