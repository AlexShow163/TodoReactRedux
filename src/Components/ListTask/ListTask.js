import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';



import {useDispatch, useSelector} from "react-redux";
import {toggleIsDoneTask, deleteClickTask} from '../../Redux/actions/taskActions'





const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 768
    },
    items: {
        paddingLeft: 0,
        paddingBottom:0,
        paddingTop:0
    },

}));







export default  function ListTask () {
    const listTaskItem = useSelector(state => state.taskReducer.task)
    const dispatch = useDispatch()
    const classes = useStyles();




    const toggleTask = arr => dispatch(toggleIsDoneTask(arr))
    const deleteTask = arr => dispatch(deleteClickTask(arr))

    const toggleIsDone = (item) => {
        item.isDone = !item.isDone
        let arrTask = [...listTaskItem]
        toggleTask(arrTask)
    }

    const deleteTaskIcon = (item) => {
        let arrDelTask = listTaskItem.filter((el) => el.id !== item.id)
        console.log(arrDelTask)
        deleteTask(arrDelTask)
    }


    return (
        <div  className={classes.root}>
            <Grid container
                  direction="row"
                  justify='space-between'
                  spacing={2}
            >
                <Grid
                    item xs={12} md={12}
                >
                    <div >
                        <List >
                            {listTaskItem.map((item) => {
                                return (
                                    <ListItem key={item.id} className={classes.items}>
                                        <IconButton onClick={() => toggleIsDone(item)} >
                                            {item.isDone
                                                ? <CheckCircleOutlineIcon
                                                    className={classes.greenColor}
                                                    fontSize='large'
                                                />
                                                : <CloseIcon
                                                color="secondary"
                                                fontSize='large'
                                                />
                                            }
                                        </IconButton>
                                        <ListItemText>{item.title}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => deleteTaskIcon(item)} edge="end" aria-label="delete">
                                                <DeleteIcon/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>


    )
}