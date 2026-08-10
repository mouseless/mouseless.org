---
title: mouseless -- how we work
menu-title: how we work
position: 2
seo-title: >
  > mouseless -- how we work_
seo-description: >
  Experiment and learn; deliver at pace.
seo-image: images/logo-profile-mark-primary-500px.png
---

::block

:::banner

#### Experiment and learn;
## Deliver at pace.

:::

::

::block{color=black}

```mermaid
flowchart TB
    R(Requirement<br>Emerges)

    subgraph LC[Done in days]
        W(Work starts<br>with Draft PR)
        S(Write specs<br>as automated<br>tests)
        DR(Develop &<br>Code Review)
        C(Customer<br>Reviews)

        W --> S
        S --> DR
        DR --> C
        C --> S
    end

    D(Deliver)

    R --> LC
    LC --> D
```

::

::block

:::banner

::::columns{:itemWidths='["80%", "20%"]' imageBehavior='icon'}

#text

### Low Cost of Change

Automated testing and continuous refactoring let us adapt quickly while keeping
costs low.

:::::bullet-list

- Test automation
- Refactoring
- Tech-stack update

:::::

#image

![low cost of change](images/how-we-work/lcoc.png)

::::

:::

:br

### See in action

:::columns

#baked-builds

#### Tests and Coverage

Check out our open source project, [Baked][], to see how we utilize test
automation;

:link-button{to="https://github.com/mouseless/baked/actions/runs/18309280610" text="See in GitHub"}

#net-upgrade

#### Research Upgrades

We provide our clients with technology upgrades out of the box. Check out how we
manage tech upgrades.

:link-button{to="https://github.com/mouseless/learn-nuxt/pull/68" text="See in GitHub"}

#baked-net-upgrade

#### Apply Upgrades

Using our opinionated framework we manage to easily upgrade client projects.

:link-button{to="https://baked.mouseless.codes/release-notes/v0/#v0130" text="See in Baked"}

:::

::

::block{color=black}

:::banner

::::columns{:itemWidths='["80%", "20%"]' imageBehavior='icon'}

#text

### Continuous Delivery

We guarantee rapid delivery with an end-to-end CI/CD setup, prioritizing
efficiency and reliability.

:::::bullet-list

- 5 days of average lead-time
- No estimation, continuous planning
- End to end CI/CD setup

:::::

#image

![continous delivery](images/how-we-work/cd.png)

::::

:::

:br

### See in action

:::columns

#freq-releases

#### Frequent Releases

Check out [Baked][] releases to see frequency of our delivery cycle;

:link-button{to="https://github.com/mouseless/baked/releases" text="See in GitHub"}

#lead-time

#### Lead-Time

See how we build software incrementally;

:link-button{to="https://github.com/mouseless/baked/pulls?q=label%3APublish+is%3Aclosed" text="See in GitHub"}

:::

::

::block

:::banner

::::columns{:itemWidths='["80%", "20%"]' imageBehavior='icon'}

#text

### Progress Visibility

We stay transparent at every stage through draft PRs, clear tasks, and open
communication.

:::::bullet-list

- Draft PRs right from beginning
- Well detailed task lists
- Clear commit messages

:::::

#image

![progress visibility](images/how-we-work/pv.png)

::::

:::

:br

### See in action

:::columns

#baked-epic

#### PRs

Check out our live work right from GitHub;

:link-button{to="https://github.com/mouseless/baked/pulls" text="See in GitHub"}

#learn-task

#### Tasks

See how we care work descriptions and tasks;

:link-button{to="https://github.com/mouseless/baked/pull/312" text="See in GitHub"}

:::

::

::block{color=black}

:::banner

::::columns{:itemWidths='["80%", "20%"]' imageBehavior='icon'}

#text

### Cross Pollination

Our focus on open source and diverse projects encourages knowledge sharing and
supports innovation.

:::::bullet-list

- Open Source
- Continuous Learning

:::::

#image

![cross pollination](images/how-we-work/cp.png)

::::

:::

:br

### See in action

:::columns

#baked-docs

#### Baked

Check out Baked, our opinionated framework for .NET and Vue;

:link-button{to="https://baked.mouseless.codes" text="See Baked"}

#learn-nuxt

#### Learn

See how we learned, documented and use Nuxt;

:link-button{to="https://mouseless.github.io/learn-nuxt" text="Learn Nuxt"}

#all-open-source

#### Open Source

See what we've open sourced so far;

:link-button{to="https://github.com/mouseless?type=public" text="See in GitHub"}

:::

::

:block{content="contents/lets-meet.md"}
:block{content="contents/our-collective.md" color=black}
:block{content="contents/explore-long-term.md"}

::block{color=black}

## Questions you might have

:include{content="contents/questions/project-management.md"}
:include{content="contents/questions/common.md"}

::

[Baked]: https://baked.mouseless.codes
