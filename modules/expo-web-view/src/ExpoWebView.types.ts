import type { ViewProps } from "react-native";

export type OnLoadEvent = {
  url: string;
};

export type Props = {
  url?: string;
  onLoad?: (event: { nativeEvent: OnLoadEvent }) => void;
} & ViewProps;
