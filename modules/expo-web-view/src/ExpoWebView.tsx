import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import type { Props } from './ExpoWebView.types';

const NativeView: React.ComponentType<Props> =
  requireNativeViewManager('ExpoWebView');

export default function ExpoWebView(props: Props) {
  return <NativeView {...props} />;
}
