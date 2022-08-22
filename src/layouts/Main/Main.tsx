interface IMainProps {
  children?: React.ReactNode;
}

function Main({ children }: IMainProps) {
  return <main>{children}</main>;
}

export default Main;
