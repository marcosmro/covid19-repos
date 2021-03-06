import React from 'react'
import styled from '@emotion/styled'
import { EntypoHome, EntypoTwitter, EntypoGithub } from 'react-entypo'
import Layout from '../components/layout'
import SEO from '../components/seo'

const EntypoIcon = styled(({ Icon, className }) => <Icon className={className} />)`
  position: relative;
  top: 1px;
`

const DetailLink = styled.a`
  display: inline-block;
  white-space: nowrap;
  margin-right: 18px;

  &,
  &:visited {
    color: #666;
  }

  &:link,
  &:active,
  &:hover {
    color: #222;
    text-decoration: none;
  }
`

const FieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .title {
    font-weight: 700;
    margin-right: 8px;
  }
`

const Field = styled.div`
  margin-right: 18px;
`

const FieldLabel = styled.span`
  font-weight: 700;
  margin-right: 8px;
`

const Content = styled.div`
  a {
    &,
    &:link,
    &:active,
    &:hover {
      color: #00c7b7;
      text-decoration: none;
    }
  }
`

const Project = ({ pageContext }) => {
  const {
    id,
    url,
    title,
    repo,
    // repohost,
    homepage,
    // stars,
    // followers,
    twitter,
    content,
    fields,
  } = pageContext

  return (
    <Layout projectTitle={title} projectUrl={url} projectId={id}>
      <SEO pageTitle={title} />
      <h1>{title}</h1>
      <div>
        {repo && (
          <DetailLink href={`https://github.com/${repo}`}>
            {/*<EntypoIcon Icon={EntypoGithub} /> {repo} ({stars})*/}
            <EntypoIcon Icon={EntypoGithub} /> {repo}
          </DetailLink>
        )}
        {twitter && (
          <DetailLink href={`https://twitter.com/${twitter}`}>
            {/*<EntypoIcon Icon={EntypoTwitter} /> {twitter} ({followers})*/}
            <EntypoIcon Icon={EntypoTwitter} /> {twitter}
          </DetailLink>
        )}
        {homepage &&
        <DetailLink href={homepage}>
          <EntypoIcon Icon={EntypoHome}/> {homepage}
        </DetailLink>
        }
      </div>

      <FieldsContainer>
        {fields.map(({ name, label }) => {
          const value = pageContext[name]
          return (
            <Field key={name}>
              <FieldLabel>{label}:</FieldLabel>
              <span>{Array.isArray(value) ? value.join(', ') : value}</span>
            </Field>
          )
        })}
      </FieldsContainer>

      <Content>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </Layout>
  )
}

export default Project
