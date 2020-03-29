# covid19repos.com

[covid19repos.com](https://covid19repos.com), a list of GitHub repositories with COVID-19 (Coronavirus) resources.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3d1394c8-af2f-46f0-bf95-b09acad4f0e8/deploy-status)](https://app.netlify.com/sites/eloquent-ramanujan-c89adb/deploys)

## Contributing

Missing a relevant COVID-19 resource here? Just fork the repo and add your generator
as a `<name>.md` in the [content/projects](https://github.com/marcosmro/covid19-repos/tree/master/content/projects) folder. 

Use our [resource template](https://raw.githubusercontent.com/marcosmro/covid19-repos/master/content/resource_template/template.md) as a reference to know what information you need to provide for your resource. 
 
We reserve the right to accept or reject any opened pull requests. We'll only accept pull requests updating current resources or adding new resources that are clearly related to COVID-19. New resources must comply with the following requirements:
 
- **Accessible on GitHub:** The resource must have a public repository on GitHub that we can link to and pull in stats from.
- **Stick to the format:** Fill out all the same fields as the other static site generators in [content/projects](https://github.com/marcosmro/covid19-repos/tree/master/content/projects). Use our [resource template](https://raw.githubusercontent.com/marcosmro/covid19-repos/master/content/resource_template/template.md) as a reference to know what fields are required and optional, and to check the values accepted for each field.  

## Usage

Be sure that you have the latest node and npm installed, then clone this repository and run:

```bash
npm install
npm start
```

In order to successfully retrieve Twitter followers and GitHub stars, you
will need authentication keys for these services.

For GitHub, all you'll need is a personal access token with the repo and gist scopes. This can be
generated at <https://github.com/settings/tokens>.

For Twitter, you need to create an application at <https://apps.twitter.com> to get the necessary tokens. When
deploying, you must set the environment variables per the example below. If you are developing
locally, you can set these in a `.env` file at the root of the repo.

```
GITHUB_TOKEN=examplekey123abc
TWITTER_CONSUMER_KEY=examplekey231abc
TWITTER_CONSUMER_SECRET=examplekey321abc
TWITTER_ACCESS_TOKEN_KEY=examplekey231abc
TWITTER_ACCESS_TOKEN_SECRET=examplekey321abc
```

GitHub and Twitter data are cached in the `tmp` directory, and online in a Gist. If neither
has data newer than 24 hours old, fresh data is fetched from GitHub, GitLab, and Twitter. Fetching
caching occur automatically during the build.

Then visit http://localhost:8000/ - Gatsby will automatically reload when changes occur.

To test a production build locally, do:

```bash
npm run stage
npm run serve
```

To run a production build for deployment:

```bash
npm run build
```
## License

COVID19Repos is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).
