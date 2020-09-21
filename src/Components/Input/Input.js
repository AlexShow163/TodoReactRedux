import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {pushTaskArr} from "../../Redux/actions/taskActions";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',

        },

    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(2),

    },
}));

function Input() {
    const classes = useStyles();
    const [tasks,setTasks] = useState('')

    const dispatch = useDispatch()

    const arrPushTask = arr => dispatch(pushTaskArr(arr))

    const dataTasks = event => setTasks(event.target.value)


    const  pushTaskList = (event) => {
        event.preventDefault()
        if(tasks.length <= 0) {
            alert('Введите задачу')
        }else {
            let out = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            let sendTask = {}
            sendTask.id = out
            sendTask.title = tasks
            sendTask.isDone = false
            arrPushTask(sendTask)
            setTasks('')
            console.log(sendTask)
        }


    }




    return (
        <React.Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-secondary"
                    label="Введите задачу"
                    color="primary"
                    value={tasks}
                    fullWidth={true}
                    onChange={dataTasks}
                />

            </form>
           <Grid
               container
               justify='flex-end'
           >
               <Button
                   onClick={pushTaskList}
                   variant="contained"
                   size='medium'
                   color="primary"
                   className={classes.button}
                   endIcon={<Icon>send</Icon>}
               >
                   Добавить
               </Button>
           </Grid>
        </React.Fragment>


    )
}
 export default Input
