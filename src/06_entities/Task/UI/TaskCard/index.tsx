import type { PropsWithChildren } from "react";
import { Card } from "antd"
import { Link } from "react-router-dom"
import styles from "./styles.module.sass"

export type TaskCardProps = PropsWithChildren<{
    data?: import("07_shared/api").Task;
    titleHref?: string;
}> & import("antd").CardProps

export const TaskCard = ({ data, titleHref, children, ...cardProps }: TaskCardProps) => {
    if (!data && !cardProps.loading) return null;

    return <Card
        title={`Task#${cardProps.loading ? "" : data?.id}`}
        className={styles.root}
        {...cardProps}
    >
        {titleHref ? <Link to={titleHref}>{data?.title}</Link>
            : data?.title}
        {children}
    </Card>
}