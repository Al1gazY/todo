import { View, Text, Pressable, Switch, Alert } from "react-native";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '../../redux/taskSlice';

export default function Task({ title, id, status }) {
    const dispatch = useDispatch();

    const deleteTask = async () => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "OK", onPress: async () => {
                        dispatch(removeTask(id));
                    }
                }
            ]
        );
    };

    const changeStatus = async () => {
        dispatch(updateTask({ id: id, status: !status }));
    };

    return (
        <Pressable style={styles.taskContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.headingText}>{title}</Text>
                <Text style={styles.statusText}>Status: {status ? "Done" : "Due"}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Switch
                    value={status}
                    onValueChange={changeStatus}
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={status ? '#ffffff' : '#f4f3f4'}
                />
                <Pressable onPress={deleteTask}>
                    <MaterialIcons name="delete" size={24} color="#ff4d4d" style={styles.deleteIcon} />
                </Pressable>
            </View>
        </Pressable>
    );
}
