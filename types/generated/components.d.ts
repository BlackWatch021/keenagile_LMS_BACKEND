import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sequence: Attribute.Integer & Attribute.Required;
    article: Attribute.Component<'article.articles', true> & Attribute.Required;
  };
}

export interface ArticleArticles extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'Articles';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    TimeToComplete: Attribute.Integer & Attribute.Required;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    sequence: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section': SectionSection;
      'article.articles': ArticleArticles;
    }
  }
}
