import { ModalProvider } from "./context";

type WithModalProps = {}

export function withModalProvider<T extends WithModalProps = WithModalProps>(
    WrappedComponent: React.ComponentType<T>
  ) {
    const displayName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";
  
    const ComponentWithModalProvider = (props: Omit<T, keyof WithModalProps>) => {
        return (
            <ModalProvider>
                <WrappedComponent {...(props as T)} />
            </ModalProvider>
        ) 
    };
  
    ComponentWithModalProvider.displayName = `withModalProvider(${displayName})`;
  
    return ComponentWithModalProvider;
  }