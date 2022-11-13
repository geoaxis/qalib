import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTemplate = {
  readonly id: string;
  readonly name: string;
  readonly template: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTemplate = {
  readonly id: string;
  readonly name: string;
  readonly template: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Template = LazyLoading extends LazyLoadingDisabled ? EagerTemplate : LazyTemplate

export declare const Template: (new (init: ModelInit<Template, TemplateMetaData>) => Template) & {
  copyOf(source: Template, mutator: (draft: MutableModel<Template, TemplateMetaData>) => MutableModel<Template, TemplateMetaData> | void): Template;
}