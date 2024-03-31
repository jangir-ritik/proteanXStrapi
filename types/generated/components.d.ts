import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsLinkButton extends Schema.Component {
  collectionName: 'components_elements_link_buttons';
  info: {
    displayName: 'linkButton';
    description: '';
  };
  attributes: {
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    title: Attribute.String;
  };
}

export interface ElementsList extends Schema.Component {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    li: Attribute.JSON;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    linkButton: Attribute.Component<'elements.link-button'>;
    heroImage: Attribute.Media;
    title: Attribute.JSON;
  };
}

export interface SectionsSingleColumn extends Schema.Component {
  collectionName: 'components_sections_single_columns';
  info: {
    displayName: 'singleColumn';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.JSON;
    list: Attribute.Component<'elements.list', true>;
    linkButton: Attribute.Component<'elements.link-button'>;
  };
}

export interface SectionsTwoColumn extends Schema.Component {
  collectionName: 'components_sections_two_columns';
  info: {
    displayName: 'twoColumn';
    description: '';
  };
  attributes: {
    super: Attribute.String;
    title: Attribute.JSON;
    sectionImage: Attribute.Media;
    linkButton: Attribute.Component<'elements.link-button'>;
    list: Attribute.Component<'elements.list', true>;
    description: Attribute.Text;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'metaData';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.link-button': ElementsLinkButton;
      'elements.list': ElementsList;
      'sections.hero': SectionsHero;
      'sections.single-column': SectionsSingleColumn;
      'sections.two-column': SectionsTwoColumn;
      'seo.meta-data': SeoMetaData;
    }
  }
}
