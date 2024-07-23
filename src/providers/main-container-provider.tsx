interface MainContainerProviderInterface {
  children: React.ReactNode;
}

export const MainContainerProvider = ({
  children,
}: MainContainerProviderInterface) => {
  // TODO:: add theme provider here
  return <div>{children}</div>;
};
