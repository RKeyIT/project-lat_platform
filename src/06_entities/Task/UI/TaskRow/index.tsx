import React, {PropsWithChildren, ReactNode} from 'react';
import {Row} from "antd";
import cn from 'classnames'
import {Link} from "react-router-dom";
import styles from './styles.module.sass'

export type TaskRowProps = PropsWithChildren <{
    data: import('07_shared/api').Task;
    titleHref?: string;
    before?: ReactNode;
}>

export const TaskRow = ({data, titleHref}: TaskRowProps) => {
    return (
        <Row className={cn(styles.root, {[styles.completed]: data.completed})}>
            {titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title}
        </Row>
    );
};