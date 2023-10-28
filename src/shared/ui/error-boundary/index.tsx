import React from "react";
import "./styles.scss";

type PropsType = {
    children: JSX.Element | JSX.Element[],
    errorTitle?: string
}

type StateType = {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true};
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>{this.props.errorTitle || "По пизде в который раз"}</h2>;
        }

        return this.props.children;
    }

}