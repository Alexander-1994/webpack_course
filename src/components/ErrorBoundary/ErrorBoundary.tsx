import { Component, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

type TState = {
  hasError: boolean;
};

const CaughtError = () => (
  <>
    <h1>Что-то пошло не так...</h1>
    <h2>Обновите страницу или попробуйте позже</h2>
  </>
);

export class ErrorBoundary extends Component<TProps, TState> {
  state: TState = {
    hasError: false,
  };

  static getDerivedStateFromError(): TState {
    return { hasError: true };
  }

  render(): ReactNode {
    return this.state.hasError ? <CaughtError /> : this.props.children;
  }
}
