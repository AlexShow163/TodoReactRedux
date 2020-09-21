import React from "react"
import { Typography,Box} from "@material-ui/core";

import Input from '../Input/Input'
import ListTask from "../ListTask/ListTask";



export default function Title () {

    return (
        <Box className='wrap-task task' mt={6} >
            <Typography className="task-title" variant="h4" align='center' >
                Задачи на сегодня
            </Typography >
            <Input />
            <ListTask/>
        </Box>
    )

}