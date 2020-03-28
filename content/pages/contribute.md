---
title: Contributing
---

# Contributing

Each resource is defined by a markdown file in the `content/projects` folder. Everybody is welcome to contribute to COVID19Repos, just fork the [GitHub repo](https://github.com/marcosmro/covid19-repos), add a markdown file for the resource that you want to add, and send a pull request. Use our [resource template](../resource_template/template.md) to know what information you need to provide for your resource. 
 
We'll only accept pull requests adding new static site generators if they follow the following rules:

- **Static Site Generation:** No "flat-file CMSes" or similar tools. The program must be able to output a static website that can be hosted in places like Netlify, S3 or GitHub Pages.
- **Open Source:** The generator must be released under an open source license.
- **Accessible on GitHub:** The generator must have a public repository on GitHub that we can link to and pull in stats from.
- **Stick to the format:** Fill out all the same fields as the other static site generators in `content/projects`.

Many static site generators support different template engines. Don't list them all in the template field, just the one(s) used by default. Feel free to go into more details in the body text.
