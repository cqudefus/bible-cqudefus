## Test

| **Board**       |  **Branch**   | **Explained**                                                     | **Notes** |
| --------------- | :-----------: | ----------------------------------------------------------------- | --------- |
| **Backlog**     |               | Upcoming tasks                                                    |           |
| **To do**       |               |                                                                   |           |
| **In Progress** | Localhost Dev | In currently in Dev (Localhost)                                   |           |
| **In Review**   |      QA       | Task is in review by QA team                                      |           |
| **Done**        |    Master     | Task has been completed and is ready to be deployed to production |           |

## Agile (Kanban) (Website)

| **Board**             |   **Branch**   | **Explained**                                                                                                                  | **Notes**                                                                                                                                                                                                                                                                                                                |
| --------------------- | :------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Backlog**           |                |                                                                                                                                |                                                                                                                                                                                                                                                                                                                          |
| **To do**             |                |                                                                                                                                |                                                                                                                                                                                                                                                                                                                          |
| **In Progress**       | Localhost Dev  | In currently in Dev (Localhost)                                                                                                | The developer does their Dev locally, then push on development to do Dev testing. Do a screenshot, then submit a pull request for the Test. Pull requests will get a code review alongside your testing document with screenshots. When accepted, the Dev will conduct the same test in Test. Then, move the Jira to QA. |
| **Review**            | Feature branch |                                                                                                                                |                                                                                                                                                                                                                                                                                                                          |
| **Ready for Testing** |      Test      |                                                                                                                                |                                                                                                                                                                                                                                                                                                                          |
| **Test**              |      Test      |                                                                                                                                |                                                                                                                                                                                                                                                                                                                          |
| **QA**                |       QA       | All the testing that needs to be actioned against the feature, e.g., White box testing, Gorilla Testing, and Security Testing. | The gatekeepers of the systems or app, making sure everything fits perfectly.                                                                                                                                                                                                                                            |
| **Release candidate** |       RC       | When a Jira is ready for production                                                                                            |

- dev
- test
- Qa
- RCRC
- master

# Documentations

In each story, everyone must get a ticket where they will do their documentation. All parties involved must document their actions and solutions in an attractive, structured manner. All parties will include their URLs in the ticket description. They will document this on their respective [platforms](Cqudefus%20-%20Software%20Documentation.docx).

Documentation tickets must also go thru QA.

- Developer – When asking for RC code review. You must also include your wiki pages
- Designer – Folder your designers and explain them and structure them for the next person
- Product Owner – Specs must be sorted in a lovely manner, and clean up your tickets

## Pull Request

Set some git request rules (you can set requirements before the user sends PR)

- PR Title
  - Jira number/issue number with Description

# Jira Explained

- Epic – Large portion of work
  - Example: **Building a website**
- Story / Task [[Ma1]](#\_msocom_1) – Smaller portion of work
  - Example: **Login Page, Navigation Menu**
- Sub-Task – All the tasks related to completing the Story/Task
  - Example: UI Design, API creation, Front End
- Bug
  - Example:

## Building an MVP

- Building an MVP requires a different mindset, not what we are used to as professionals. An MVP is evaluating the hypnosis of the concept

Building this MVP can be a few technologies. It is just us evaluating the hypnosis of the concept.

# Agile

**Agile means continuous incremental improvement through small and frequent releases.**

- Each team must set its value and principal in how they want to work
  - These will help with decision-making.
  - Each scrum team member must consider these values and principles when making decisions.
- For speed and collaboration

# Project Management

How we will run our project depends on the application or software, or team

- Project Management will use: **Lean Six Sigma**
- Project development, we will incorporate the below PM methodologies
- **Agile**
  - Each team must set its value and principal in how they want to work
    - These will help with decision-making.
    - Each scrum team member must consider these values and principles when making decisions.
  - For speed and collaboration.
- **Scrum**
  - Delivery in a sprint
- **Lean** **development**
  - Minimise waste, focus on what matters, and develop what brings value to the user.
- **Kanban**
  - Minimise work in progress
  - Supply visibility to the team.
  - One task per time. No multitasking is involved.  %%//Remember to breakdown tasks into smaller tasks%%
  - You cannot work on everything at a time  %%//the is no such thing as multitasking, only switch-tasking.%%
  - **Six Sigma**
    - Improve current product & progress to meet customer needs
    - Process improvement and removing defects
- **Adaptive**
  - Make sure the is a live version of the product. If something is wrong with v3, then have v2 in production.
  - The whole point of adaptive is that the user still uses the product despite small bugs. Just make sure the product is live and supplying value to the user

# Sprint

There should be two sprints per month, resulting in 2 weeks of sprints (+-10 days).

- Sprint Review – Task that is finished
- Provide sprint Team Reports.

- Spring retrospective – Scrum Team discussion about how things were

## Documentations

In each story, everyone must get a ticket where they will do their documentation. All parties involved must document their actions and solutions in an attractive structured manner. All parties will include their URLs on the ticket description, and they will document them on their respective platforms.

- A documentation ticket must also go thru QA.
- Developer – When asking for RC code review. You must also include your wiki pages
- Designer – Folder, your designers and explain them and structure them for the next person
- Product Owner – Specs must be sorted in a lovely manner, and clean up your tickets

## Pull Request

Set some git request rules (you can set requirements before the user sends PR)

- PR Title
  - Jira number/issue number with Description

## Jira Explained

Stories are not system requirements; they are written in English and described in a sentence, like a vibe. Add multilevel nav to the home page for mobile.

- **Epic** – Large part of the work
  - Example: **Building a website**

* **Story / Task** – Smaller part of the work
  - Example: **Login Page, Navigation Menu**
* **Sub-Task** – All the tasks related to completing the Story/Task
  - Example: **UI Design, API creation, Front End**

## Bug

- Example:

### Building an MVP

- Building an MVP requires a different mindset, not what we are used to as professionals. An MVP is evaluating the hypnosis of the concept
- Building this MVP does not need many technologies. It is just us evaluating the hypnosis of the concept

| Environment |       Board       |    Branch     | Explained                                                   | Notes                                                                                                                                                                                                                                                                                                                             |
| :---------: | :---------------: | :-----------: | :---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Development |      Backlog      |               | Upcoming tasks                                              |                                                                                                                                                                                                                                                                                                                                   |
|             |       Todo        |               |                                                             |                                                                                                                                                                                                                                                                                                                                   |
|             |    In Progress    | Localhost Dev | In currently in Dev (Localhost)                             | The developer does their Dev locally, then pushes on development to do Dev testing. First, do a screenshot, then submit a pull request for the Test. Pull requests will get a code review alongside your testing document with screenshots. When accepted, the Dev will conduct the same Test in Test. Then, move the Jira to QA. |
|     QA      |        QA         |     Test      | Quality Assurance - Testing                                 | QA will conduct tests and view the developers’ test results. When happy, the QA will move the ticket to Alpha. Finally, QA will ask Dev to submit another pull request for Alpha.                                                                                                                                                 |
| Production  | Release Candidate |     Alpha     | When a Jira is ready for production, it will be moved here. | The ticket will be moved here when the code has been deployed to Alpha and QA is happy.                                                                                                                                                                                                                                           |
|             |       Live        |     Live      |                                                             |                                                                                                                                                                                                                                                                                                                                   |

# Team Hierarchy

![[Pasted image 20221201212720.png]]

# Team

## Focus

It is an especially important element in a company, like sub-projects within a project. Mean, within the team, small sub-teams focus on that experiment.
