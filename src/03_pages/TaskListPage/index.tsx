import { useEffect } from "react";

import { useStore } from "effector-react";
import {Layout, Row, Col, Typography, Spin, Empty} from "antd"

import {TaskRow, taskModel} from "06_entities/Task"
import styles from "./styles.module.sass"

import React from 'react';

const TaskListPage = () => {
    const tasks = useStore(taskModel.$tasksList);
    const isLoading = useStore(taskModel.$tasksListLoading)

    return (
        <div>

        </div>
    );
};

export default TaskListPage;