import { LocalesManagerType, ModulesManagerType } from '@/types/modules';
import {
  AnyContext,
  RootRoute,
  Router,
  RouterHistory,
  TrailingSlashOption,
} from '@tanstack/react-router';

export type RouterType = Router<
  any,
  TrailingSlashOption,
  boolean,
  RouterHistory,
  Record<string, any>,
  Record<string, any>
> | null;

export type RootRouteType = RootRoute<
  undefined,
  {},
  AnyContext,
  AnyContext,
  {},
  undefined,
  unknown,
  unknown
>;

export type UseDynamicRouterParams = {
  rootRoute: RootRouteType;
  modulesManager: ModulesManagerType;
  localesManager: LocalesManagerType;
};
