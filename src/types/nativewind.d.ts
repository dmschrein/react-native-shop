declare module "nativewind/styled" {
  import { ViewProps } from "react-native";

  type StyledComponent<P> = React.ComponentType<P & { className?: string }>;

  export default function styled<P>(
    component: React.ComponentType<P>
  ): StyledComponent<P>;
}
