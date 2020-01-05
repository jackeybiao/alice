import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import config from '../config';

import graphql from './graphql';

import { QueryPost, MutationComment } from './types';

const { username, repository, GRAPHQL_URL, token } = config;

const access_token = token.join('');

const graphQLFetch = (document: string) => {
  const payload = JSON.stringify({ query: document });
  return ajax({
    url: GRAPHQL_URL,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: payload,
  }).pipe(
    map(({response}) => response.data),
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );
};

const graphQLMutationFetch = async (document: string) => {
  const access_token = token.join('')
  const payload = JSON.stringify({ mutation: document })
  return ajax({
    url: GRAPHQL_URL,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: payload,
  }).pipe(
    map(({response}) => response.data),
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );
}

export const queryPosts = (params: QueryPost) => graphQLFetch(graphql.queryGraphQLPosts(username, repository, params));

export const queryLabels = () => graphQLFetch(graphql.queryGraphQLLable(username, repository));

export const queryCategory = () => graphQLFetch(graphql.queryGraphQLCategory(username, repository));

export const queryPostItem = (number: number) => graphQLFetch(graphql.queryGraphQLPostItem(username, repository, number));

export const mutationPostComment = (params: MutationComment) => graphQLMutationFetch(graphql.mutationGraphQLPostComment(params.subjectId, params.body));
