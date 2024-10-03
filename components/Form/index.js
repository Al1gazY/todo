import { View, Text, TextInput, Switch, Button, Keyboard } from "react-native";
import { useState } from 'react';
import styles from "./styles";
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import uuid from 'react-uuid';

export default function Form() {

    const dispatch = useDispatch();

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [titleError, setTitleError] = useState(null)

    const changeTaskStatus = (value) => {
        setTaskDone(value);
    }

    const addTaskPressed = async () => {
        if (taskTitle) {
            const task = {
                id: uuid(),
                title: taskTitle,
                status: taskDone,
            };
            dispatch(addTask(task));
            setTitleError('');
            setTaskTitle('');
            setTaskDone(false);
            Keyboard.dismiss();
        } else {
            setTitleError("The Title is required for the task");
        }
    }

    const handleTitleChange = (value) => {
        setTaskTitle(value);
    }

    return (
        <View style={styles.container}>
            {titleError ? (
                <View style={styles.errorStyle}>
                    <Text style={[styles.errorTextStyle, styles.boldText]}>Attention:</Text>
                    <Text style={styles.errorTextStyle}>{titleError}</Text>
                </View>) : null}
            <TextInput
                style={styles.inputStyle}
                placeholder='Enter a task title'
                placeholderTextColor="#9a9a9a"
                maxLength={150}
                onChangeText={handleTitleChange}
                value={taskTitle}
            />
            <View style={styles.switchStyle}>
                <Text style={styles.basicTextStyle}>Task Done:</Text>
                <Switch value={taskDone} onValueChange={changeTaskStatus} />
            </View>
            <Button
                title='Add'
                onPress={addTaskPressed}
                color='#7a7aff'
            />
        </View>
    );
}
